import { readFileSync, writeFile } from "fs";
import { load } from "js-yaml";

const locale1 = "en-US";
const locale2 = "pt-BR";
const fileName = "state_of_html_2023.yml";
const fileNameWithoutExtension = fileName.replace(/\.yml$/, "");

function verifyYAMLFile(fileName) {
  const results = [];
  let locales = [`./docs/${locale1}`, `./docs/${locale2}`];

  for (const locale of locales) {
    try {
      const yamlContent = readFileSync(`${locale}/${fileName}`, "utf8");
      const data = load(yamlContent);
      const formatedData = data.translations.map(({ key }) => key);

      results.push(formatedData);
    } catch (error) {
      console.error("Error parsing YAML file:", error.message);
      results.push(false);
    }
  }

  return results;
}

function findItemsNotIncluded() {
  const locale1 = verifyYAMLFile(fileName)[0];
  const locale2 = verifyYAMLFile(fileName)[1];
  return locale1.filter((item) => !locale2.includes(item));
}
const itemsNotIncluded = findItemsNotIncluded();

const resultString =
  `key not included in ${locale2}:\n\n` + itemsNotIncluded.join("\n");

// Write the result to a file named output.txt
writeFile(
  `./docs/${locale2}/missing-keys-${fileNameWithoutExtension}.md`,
  resultString,
  (err) => {
    if (err) throw err;
    console.log("Result has been saved to output.txt");
  }
);
