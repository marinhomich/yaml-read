import { readFileSync } from "fs";
import { load } from "js-yaml";

function verifyYAMLFile(filePath) {
  try {
    // Read the YAML file
    const yamlContent = readFileSync(filePath, "utf8");

    // Parse the YAML content
    const data = load(yamlContent);
    const formatedData = data.translations.map(({ key }) => key);
    return formatedData;
  } catch (error) {
    // If an error occurs during parsing, return false and log the error
    console.error("Error parsing YAML file:", error.message);
    return false;
  }
}

function verifyYAMLFile2(filePath) {
  try {
    // Read the YAML file
    const yamlContent = readFileSync(filePath, "utf8");

    // Parse the YAML content
    const data = load(yamlContent);
    const formatedData = data.translations.map(({ key }) => key);
    return formatedData;
  } catch (error) {
    // If an error occurs during parsing, return false and log the error
    console.error("Error parsing YAML file:", error.message);
    return false;
  }
}

// Example usage
const filePath = "./docs/en-US/state_of_html_2023.yml"; // Change this to the path of your YAML file
const filePath2 = "./docs/pt-BR/state_of_html_2023.yml"; // Change this to the path of your YAML file

function findItemsNotIncluded(arrayA, arrayB) {
  return arrayA.filter((item) => !arrayB.includes(item));
}

const isYAMLValid = verifyYAMLFile(filePath);
const isYAMLValid2 = verifyYAMLFile2(filePath2);

console.log(findItemsNotIncluded(isYAMLValid, isYAMLValid2));
