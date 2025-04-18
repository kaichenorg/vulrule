import React from "react";
import styles from "./styles.module.css";
import CodeBlock from '@theme/CodeBlock';

interface RuleProps {
  ruleName: string;
  ruleDescription?: string;
  ruleType?: string;
  ruleData: any;
}

/**
 * Component to display vulnerability rule details in a structured format
 */
export default function RuleDisplay({
  ruleName,
  ruleDescription,
  ruleType,
  ruleData,
}: RuleProps): JSX.Element {
  // 预处理规则数据，将cweType-and-QLCode拆分为单独的cweType和QLCode
  const processRuleData = (data: any) => {
    if (!data) return {};

    const processedData = { ...data };

    // 处理复合字段 cweType-and-QLCode
    if (processedData["cweType-and-QLCode"]) {
      const combinedValue = processedData["cweType-and-QLCode"];

      // 如果是数组，处理数组中的每个对象
      if (Array.isArray(combinedValue)) {
        const cweTypes = [];
        const qlCodes = [];

        combinedValue.forEach((item) => {
          if (item.cweType) {
            // 如果cweType本身是数组，展开添加
            if (Array.isArray(item.cweType)) {
              cweTypes.push(...item.cweType);
            } else {
              cweTypes.push(item.cweType);
            }
          }

          if (item.QLCode) {
            qlCodes.push(item.QLCode);
          }
        });

        // 只在有值时添加到处理后的数据中
        if (cweTypes.length > 0) {
          processedData["cweType"] = cweTypes;
        }

        if (qlCodes.length > 0) {
          processedData["QLCode"] = qlCodes.join("\n\n");
        }
      } else if (typeof combinedValue === "string") {
        // 保留原有的字符串处理逻辑
        const cweMatch = combinedValue.match(/CWE-\d+/g);
        if (cweMatch) {
          processedData["cweType"] = cweMatch;
        }

        const qlCodeMatch =
          combinedValue.match(/```[\s\S]*?```/g) ||
          combinedValue.match(/from\s+\w+.*[\s\S]*?select\s+.*/gi);
        if (qlCodeMatch) {
          processedData["QLCode"] = qlCodeMatch
            .join("\n")
            .replace(/```/g, "")
            .trim();
        } else if (cweMatch) {
          const cweString = cweMatch.join(" ");
          let qlCode = combinedValue.replace(cweString, "").trim();
          processedData["QLCode"] = qlCode;
        }
      } else if (typeof combinedValue === "object" && combinedValue !== null) {
        // 处理单个对象的情况
        if (combinedValue.cweType) {
          processedData["cweType"] = combinedValue.cweType;
        }
        if (combinedValue.QLCode) {
          processedData["QLCode"] = combinedValue.QLCode;
        }
      }

      // 删除原始的复合字段
      delete processedData["cweType-and-QLCode"];
    }

    return processedData;
  };

  // 处理QLCode显示，确保它以代码块方式呈现
  const renderValue = (key: string, value: any) => {
    if (key === "QLCode" && typeof value === "string") {
      return (
        <div className={styles.codeBlock}>
          <CodeBlock language="python">
            {value}
          </CodeBlock>
        </div>
      );
    }
    if (Array.isArray(value)) {
      return (
        <div className={styles.cweTypeContainer}>
          {value.map((item, index) => (
            <span key={index} className={styles.cweTypeTag}>
              {item}
            </span>
          ))}
        </div>
      );
    } else if (typeof value === "object" && value !== null) {
      return (
        <pre className={styles.ruleCode}>
          <code>{JSON.stringify(value, null, 2)}</code>
        </pre>
      );
    } else {
      return <p>{String(value)}</p>;
    }
  };

  // 处理规则描述
  const renderDescription = () => {
    if (ruleDescription) {
      return <p className={styles.ruleDescription}>{ruleDescription}</p>;
    }

    // 如果没有提供规则描述，尝试从ruleData中获取
    if (ruleData && ruleData.description) {
      return (
        <div className={styles.ruleSection}>
          <h4 className={styles.sectionTitle}>Description</h4>
          <p className={styles.ruleDescription}>{ruleData.description}</p>
        </div>
      );
    }

    return null;
  };

  // 对规则数据中的字段进行排序，确保重要字段优先显示
const getSortedKeys = (data: any) => {
    // Define the priority order for keys
    const keyOrder = [
        "Description",
        "cweType",
        "Label",
        "Parameter-index",
        "QLCode",
    ];

    return Object.keys(data).sort((a, b) => {
        const indexA = keyOrder.indexOf(a);
        const indexB = keyOrder.indexOf(b);

        // If both keys are in the priority list, sort by their order in the list
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }
        // If only the first key is in the priority list, it comes first
        if (indexA !== -1) {
            return -1;
        }
        // If only the second key is in the priority list, it comes first
        if (indexB !== -1) {
            return 1;
        }
        // For keys not in the priority list, sort alphabetically
        return a.localeCompare(b);
    });
};

  // 预处理规则数据
  const processedRuleData = processRuleData(ruleData);

  return (
    <div className={styles.ruleContainer}>
      <div className={styles.ruleHeader}>
        <h3>{ruleName}</h3>
        {ruleType && <span className={styles.ruleType}>{ruleType}</span>}
      </div>

      {renderDescription()}

      <div className={styles.ruleDetails}>
        {processedRuleData &&
          getSortedKeys(processedRuleData).map((key) => {
            // 如果已经作为描述显示了，就跳过
            if (
              key === "description" &&
              processedRuleData.description === ruleDescription
            ) {
              return null;
            }

            const displayKey =
              key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, " ");

            return (
              <div key={key} className={styles.ruleSection}>
                <h4 className={styles.sectionTitle}>{displayKey}</h4>
                {renderValue(key, processedRuleData[key])}
              </div>
            );
          })}

        {!ruleData && <p>暂无详细规则数据</p>}
      </div>
    </div>
  );
}
