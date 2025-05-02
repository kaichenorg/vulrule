import React, { useEffect, useState, useMemo } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";

// Define types for our stats data
interface RuleCategory {
  name: string;
  count: string;
  icon: string;
  color: string;
}

interface LibraryCategory {
  name: string;
  count: string;
}

interface ToolCategory {
  name: string;
  count: string;
}

interface StatsData {
  ruleCategories: RuleCategory[];
  libraryCategories: LibraryCategory[];
  toolCategories: ToolCategory[];
}

// Fallback data in case the JSON file can't be loaded
const fallbackRuleCategories: RuleCategory[] = [
  { name: "api pair", count: "0", icon: "🔄", color: "#4285F4" },
  { name: "initialization", count: "0", icon: "🚀", color: "#FBBC05" },
  { name: "parameter check", count: "0", icon: "🔍", color: "#8F44AD" },
  { name: "return value check", count: "0", icon: "✅", color: "#F39C12" },
];

const fallbackLibraryCategories: LibraryCategory[] = [
  // { name: "Loading...", count: "0" },
];

const fallbackToolCategories: ToolCategory[] = [
  // { name: "Loading...", count: "0" },
];

// Function to calculate bar width with a baseline minimum and square root scaling for better visualization
const calculateBarWidth = (
  value: number,
  maxValue: number,
  minWidthPercent = 10
): number => {
  if (value === 0) return 0;
  if (value === maxValue) return 100;

  // Apply square root transformation to compress the range differences
  // This gives more visibility to smaller values while maintaining the order
  const sqrtValue = Math.sqrt(value);
  const sqrtMax = Math.sqrt(maxValue);

  // Calculate percentage with the square root values
  let percentage = (sqrtValue / sqrtMax) * 100;

  // Ensure a minimum width for visibility if value is not zero
  percentage = Math.max(percentage, minWidthPercent);

  // Cap at 100%
  return Math.min(percentage, 100);
};

// Function to look up a rule category by name
const findCategoryByName = (categories: RuleCategory[], name: string): RuleCategory | undefined => {
  return categories.find(category => category.name.toLowerCase() === name.toLowerCase());
};

// Fixed order of rule categories we want to display
const ruleCategoryOrder = ["api pair", "initialization", "parameter check", "return value check"];

export default function StatsDisplay(): React.ReactElement {
  // State to hold our statistics data
  const [statsData, setStatsData] = useState<StatsData>({
    ruleCategories: fallbackRuleCategories,
    libraryCategories: fallbackLibraryCategories,
    toolCategories: fallbackToolCategories,
  });

  // Calculate maximum values for each category to use as scaling reference
  const maxValues = useMemo(() => {
    return {
      ruleCategories: Math.max(
        ...statsData.ruleCategories.map((cat) => parseInt(cat.count) || 0),
        1 // Avoid division by zero
      ),
      libraryCategories: Math.max(
        ...statsData.libraryCategories.map((lib) => parseInt(lib.count) || 0),
        1
      ),
      toolCategories: Math.max(
        ...statsData.toolCategories.map((tool) => parseInt(tool.count) || 0),
        1
      ),
    };
  }, [statsData]);

  // Organize rule categories in a consistent order
  const sortedRuleCategories = useMemo(() => {
    // Create a copy of the original array to avoid mutation
    const orderedCategories = [...ruleCategoryOrder].map(categoryName => {
      // Find the category by name, case-insensitive
      const foundCategory = findCategoryByName(statsData.ruleCategories, categoryName);
      
      // If the category exists in our data, return it; otherwise create a placeholder
      return foundCategory || {
        name: categoryName,
        count: "0",
        icon: categoryName === "api pair" ? "🔄" : 
              categoryName === "initialization" ? "🚀" :
              categoryName === "parameter check" ? "🔍" : "✅",
        color: categoryName === "api pair" ? "#4285F4" : 
               categoryName === "initialization" ? "#FBBC05" :
               categoryName === "parameter check" ? "#8F44AD" : "#F39C12"
      };
    });
    
    return orderedCategories;
  }, [statsData.ruleCategories]);

  // Load the stats data from JSON file
  useEffect(() => {
    // In development, we can load the JSON dynamically
    import("./statsData.json")
      .then((data) => {
        setStatsData(data as StatsData);
      })
      .catch((error) => {
        console.error("Error loading statistics data:", error);
        // Use fallback data (already set in initial state)
      });
  }, []);

  return (
    <section className={styles.statsContainer}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h2">
              <Translate
                id="homepage.stats.title"
                description="Title for the stats section"
              >
                Vulrule Stats
              </Translate>
            </Heading>
            <p>
              <Translate
                id="homepage.stats.description"
                description="Description for the stats section"
              >
                Statistics about the collected rules
              </Translate>
            </p>
          </div>
        </div>

        <div className="row margin-top--lg">
          {/* First Column: Rule Categories */}
          <div className="col col--4">
            <div className={styles.statsCard}>
              <Heading as="h3" className="text--center">
                <Translate
                  id="homepage.stats.ruleCategories.title"
                  description="Title for rule categories section"
                >
                  Categories
                </Translate>
              </Heading>
              <div className={styles.statsContent}>
                {/* Render rule categories in consistent order */}
                {sortedRuleCategories.map((category, idx) => (
                  <div key={idx} className={styles.statItem}>
                    <div
                      className={styles.statIcon}
                      style={{
                        backgroundColor: category.color,
                      }}
                    >
                      {category.icon}
                    </div>
                    <div className={styles.statLabel}>
                      <Link to={`/labels/${category.name.toLowerCase()}`}>
                        {category.name === "api pair" && (
                          <Translate
                            id="homepage.stats.ruleCategories.apipair"
                            description="API pair category label"
                          >
                            API pair
                          </Translate>
                        )}
                        {category.name === "initialization" && (
                          <Translate
                            id="homepage.stats.ruleCategories.initialization"
                            description="Initialization category label"
                          >
                            Initialization
                          </Translate>
                        )}
                        {category.name === "parameter check" && (
                          <Translate
                            id="homepage.stats.ruleCategories.parametercheck"
                            description="Parameter check category label"
                          >
                            Parameter check
                          </Translate>
                        )}
                        {category.name === "return value check" && (
                          <Translate
                            id="homepage.stats.ruleCategories.returnvaluecheck"
                            description="Return value check category label"
                          >
                            Return value check
                          </Translate>
                        )}
                      </Link>
                    </div>
                    <div className={styles.statBarContainer}>
                      <div
                        className={styles.statBarFill}
                        style={{
                          width: `${calculateBarWidth(
                            parseInt(category.count || "0"),
                            maxValues.ruleCategories
                          )}%`,
                          backgroundColor: category.color,
                        }}
                      />
                      <span className={styles.statCount}>
                        {category.count || "0"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Column: API Distribution */}
          <div className="col col--4">
            <div className={styles.statsCard}>
              <Heading as="h3" className="text--center">
                <Translate
                  id="homepage.stats.apiDistribution.title"
                  description="Title for API distribution section"
                >
                  Projects
                </Translate>
              </Heading>
              <div className={styles.statsContent}>
                {/* API Libraries - First 6 entries */}
                {statsData.libraryCategories.slice(0, 6).map((library, idx) => (
                  <div key={idx} className={styles.statItem}>
                    <div
                      className={styles.statIcon}
                      style={{ backgroundColor: `hsl(${idx * 50}, 70%, 50%)` }}
                    >
                      {idx + 1}
                    </div>
                    <div className={styles.statLabel}>
                      <Link
                        to={
                          library.name.toLowerCase() === "others"
                            ? "/category/projects"
                            : `/projects/${library.name.toLowerCase()}`
                        }
                      >
                        {library.name}
                      </Link>
                    </div>
                    <div className={styles.statBarContainer}>
                      <div
                        className={styles.statBarFill}
                        style={{
                          width: `${calculateBarWidth(
                            parseInt(library.count) || 0,
                            maxValues.libraryCategories
                          )}%`,
                          backgroundColor: `hsl(${idx * 50}, 70%, 50%)`,
                        }}
                      />
                      <span className={styles.statCount}>{library.count}</span>
                    </div>
                  </div>
                ))}
                {statsData.libraryCategories.length > 6 && (
                  <div className={styles.viewMore}>
                    <Link to="/projects">
                      <Translate
                        id="homepage.stats.apiDistribution.viewMore"
                        description="View more APIs link text"
                      >
                        Check more APIs ...
                      </Translate>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Third Column: Rule Generation Tools */}
          <div className="col col--4">
            <div className={styles.statsCard}>
              <Heading as="h3" className="text--center">
                <Translate
                  id="homepage.stats.tools.title"
                  description="Title for rule generation tools section"
                >
                  Tools
                </Translate>
              </Heading>
              <div className={styles.statsContent}>
                {/* Top 6 Tools */}
                {statsData.toolCategories.slice(0, 6).map((tool, idx) => (
                  <div key={idx} className={styles.statItem}>
                    <div
                      className={styles.statIcon}
                      style={{
                        backgroundColor: `hsl(${idx * 40 + 120}, 70%, 50%)`,
                      }}
                    >
                      {tool.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.statLabel}>
                      <Link to={`/tools/${tool.name.toLowerCase()}`}>
                        {tool.name}
                      </Link>
                    </div>
                    <div className={styles.statBarContainer}>
                      <div
                        className={styles.statBarFill}
                        style={{
                          width: `${calculateBarWidth(
                            parseInt(tool.count) || 0,
                            maxValues.toolCategories
                          )}%`,
                          backgroundColor: `hsl(${idx * 40 + 120}, 70%, 50%)`,
                        }}
                      />
                      <span className={styles.statCount}>{tool.count}</span>
                    </div>
                  </div>
                ))}
                {statsData.toolCategories.length > 6 && (
                  <div className={styles.viewMore}>
                    <Link to="/tools">
                      <Translate
                        id="homepage.stats.tools.viewMore"
                        description="View more tools link text"
                      >
                        View All Tools ...
                      </Translate>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
