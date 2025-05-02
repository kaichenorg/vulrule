import json
import pathlib
import argparse
import shutil
from scripts.templates import *
from collections import defaultdict
from urllib.parse import quote


def parse_args():
    parser = argparse.ArgumentParser(description="Generate documentation for the project.")
    parser.add_argument(
        "--data-path",
        type=pathlib.Path,
        default=pathlib.Path(__file__).parent.parent / "data" / "data.json",
        help="Path to the data file.",
    )
    parser.add_argument(
        "--language",
        type=str,
        default="en",
        choices=["en", "zh"],
        help="Language for the documentation.",
    )
    parser.add_argument(
        "--github_url",
        type=str,
        default="https://github.com/kaichenorg/vulrule",
        help="GitHub URL for the project.",
    )
    parser.add_argument(
        "--email",
        type=str,
        default="kaichenorg@gmail.com",
        help="Email for contact.",
    )
    return parser.parse_args()

def generate_intro(args):
    return TEMPLATES[args.language]["intro"].render(
        github_url=args.github_url,
        email=args.email,
    )
    
def normalize_name(name):
    # ToLowercase and replace leading underscore with empty string
    name = name.lower()
    name = name.lstrip("_")
    return name

def escape_markdown(text):
    # Escape special characters in Markdown
    special_chars = [">", "<"]
    for char in special_chars:
        text = text.replace(char, f"\\{char}")
    return text
    
def generate_api(args, data, docs_dir):
    rules_by_tools = defaultdict(lambda: defaultdict(list))
    rules_by_labels = defaultdict(lambda: defaultdict(list))
    rules_by_libraries = defaultdict(list)
    for rule in data:
        doc_content = TEMPLATES[args.language]["api"].render(
            tool_name=rule["tool_name"],
            lib_name=rule["lib_name"],
            api_name=rule["api_name"],
            description=escape_markdown(rule["rule"]["Description"]),
            label=rule["rule"]["Label"][0],
            param_index=rule["rule"]["Parameter-index"][0] if "Parameter-index" in rule["rule"] else "",
            cwe_type=rule["rule"]["cweType-and-QLCode"][0]["cweType"][0],
            code=rule["rule"]["cweType-and-QLCode"][0]["QLCode"],
        )
        path = quote(f"projects/{normalize_name(rule['lib_name'])}/api_{normalize_name(rule['api_name'])}.md")
        doc_path = docs_dir / "projects" / normalize_name(rule["lib_name"]) / f'api_{normalize_name(rule["api_name"])}.md'
        doc_path.parent.mkdir(parents=True, exist_ok=True)
        with open(doc_path, "w", encoding="utf-8") as f:
            f.write(doc_content)
        rules_by_tools[rule["tool_name"]][normalize_name(rule["lib_name"])].append((normalize_name(rule['api_name']), path))
        rules_by_labels[rule["rule"]["Label"][0]][normalize_name(rule["lib_name"])].append((normalize_name(rule['api_name']), path))
        rules_by_libraries[normalize_name(rule["lib_name"])].append((normalize_name(rule['api_name']), path))
            
    assert len(data) > 0, "No data found in the JSON file."
    with open(docs_dir / "projects" / "_category_.json", "w", encoding="utf-8") as f:
        json.dump(
            CATEGORIES[args.language]["api"],
            f,
            indent=4,
            ensure_ascii=False,
        )
    return rules_by_tools, rules_by_labels, rules_by_libraries

def generate_indices(args, rules_by_tools, rules_by_labels, rules_by_libraries, docs_dir):
    # Generate indices for tools
    for tool_name, rules in rules_by_tools.items():
        tool_content = TEMPLATES[args.language]["tool"].render(
            tool_name=tool_name,
            rule_count=sum(len(rules) for rules in rules.values()),
            rules=rules,
        )
        tool_path = docs_dir / "tools" / f"{tool_name}.md"
        tool_path.parent.mkdir(parents=True, exist_ok=True)
        with open(tool_path, "w", encoding="utf-8") as f:
            f.write(tool_content)
    with open(docs_dir / "tools" / "_category_.json", "w", encoding="utf-8") as f:
        json.dump(
            CATEGORIES[args.language]["tool"],
            f,
            indent=4,
            ensure_ascii=False,
        )
        
    # Generate indices for labels
    for label, rules in rules_by_labels.items():
        label_content = TEMPLATES[args.language]["type"].render(
            type_name=label,
            rule_count=sum(len(rules) for rules in rules.values()),
            rules=rules,
        )
        label_path = docs_dir / "labels" / f"{label}.md"
        label_path.parent.mkdir(parents=True, exist_ok=True)
        with open(label_path, "w", encoding="utf-8") as f:
            f.write(label_content)
    with open(docs_dir / "labels" / "_category_.json", "w", encoding="utf-8") as f:
        json.dump(
            CATEGORIES[args.language]["type"],
            f,
            indent=4,
            ensure_ascii=False,
        )
        
    for lib_name, rules in rules_by_libraries.items():
        lib_content = TEMPLATES[args.language]["project"].render(
            lib_name=lib_name,
            rule_count=len(rules),
            rules=rules,
        )
        lib_path = docs_dir / "projects" / f"{lib_name}" / "index.md"
        lib_path.parent.mkdir(parents=True, exist_ok=True)
        with open(lib_path, "w", encoding="utf-8") as f:
            f.write(lib_content)
        
def generate_stats(rules_by_tools, rules_by_labels, rules_by_libraries, docs_dir):
    """Generate statistics data from the rule information"""
    # Count rules by tools
    tool_stats = []
    for tool_name, libraries in rules_by_tools.items():
        count = sum(len(apis) for apis in libraries.values())
        tool_stats.append({
            "name": tool_name,
            "count": str(count)
        })
    
    # Count rules by labels
    label_stats = []
    label_icons = {
        "initialization": "🚀",
        "parameter check": "🔍",
        "return value check": "✅",
        "api pair": "🔄"
    }
    label_colors = {
        "initialization": "#FBBC05",
        "parameter check": "#8F44AD",
        "return value check": "#F39C12",
        "api pair": "#4285F4"
    }
    
    for label, libraries in rules_by_labels.items():
        count = sum(len(apis) for apis in libraries.values())
        normalized_label = normalize_name(label)
        label_stats.append({
            "name": label,
            "count": str(count),
            "icon": label_icons.get(normalized_label, "📝"),
            "color": label_colors.get(normalized_label, "#34A853")
        })
    
    # Count rules by libraries
    library_stats = []
    # Get the top 5 libraries by rule count
    top_libraries = sorted(
        [(lib_name, len(apis)) for lib_name, apis in rules_by_libraries.items()],
        key=lambda x: x[1],
        reverse=True
    )[:5]
    
    other_count = sum(len(apis) for lib_name, apis in rules_by_libraries.items() 
                      if lib_name not in [lib for lib, _ in top_libraries])
    
    for lib_name, count in top_libraries:
        library_stats.append({
            "name": lib_name,
            "count": str(count)
        })
    
    # Add an entry for "other libraries"
    if other_count > 0:
        library_stats.append({
            "name": "others",
            "count": str(other_count)
        })
    
    # Prepare the final stats data
    stats_data = {
        "ruleCategories": label_stats,
        "libraryCategories": library_stats,
        "toolCategories": tool_stats
    }
    
    # Write the stats data to the statsData.json file
    stats_file_path = pathlib.Path(__file__).parent.parent / "src" / "components" / "Homepage" / "statsData.json"
    with open(stats_file_path, "w", encoding="utf-8") as f:
        json.dump(stats_data, f, indent=2, ensure_ascii=False)
    
def generate_docs(args):
    # Load the data from the JSON file
    with open(args.data_path, "r") as f:
        data = json.load(f)
        
    if args.language == "en":
        docs_dir = pathlib.Path(__file__).parent.parent / "docs"
    else:
        docs_dir = pathlib.Path(__file__).parent.parent / "i18n" / args.language / "docusaurus-plugin-content-docs/current/"

    # Create the documentation directory if it doesn't exist
    docs_dir.mkdir(parents=True, exist_ok=True)
    
    # Generate the introduction page
    intro_content = generate_intro(args)
    with open(docs_dir / "intro.md", "w", encoding="utf-8") as f:
        f.write(intro_content)
    rules_by_tools, rules_by_labels, rules_by_libraries = generate_api(args, data, docs_dir)
    generate_indices(args, rules_by_tools, rules_by_labels, rules_by_libraries, docs_dir)
    generate_stats(rules_by_tools, rules_by_labels, rules_by_libraries, docs_dir)
    
if __name__ == "__main__":
    args = parse_args()
    generate_docs(args)
