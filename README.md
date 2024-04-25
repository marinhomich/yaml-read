# Missing Keys Finder

This project is a simple script written in Node.js to find missing translation keys between two YAML files for different locales. It takes two YAML files containing translations for different locales and identifies keys present in one file but not in the other.

## Setup

1. Clone this repository to your local machine.
2. Make sure you have Node.js installed on your machine.
3. Install the required dependencies by running `npm install`.

## Usage

1. Place your YAML files containing translations in the `./docs` directory. Ensure that each YAML file corresponds to a different locale.
2. Modify the `locale1` and `locale2` variables in the script to match your locales.
3. Update the `fileName` variable with the name of your YAML file.
4. Run the script using `node index.js`.
5. The script will generate a Markdown file in the `./docs` directory with the list of missing keys.

## Example

Suppose you have two YAML files named `state_of_html_2023.yml` containing translations for English (United States) and Portuguese (Brazil) locales, respectively. You want to find the keys present in the English file but not in the Portuguese file.

You would set `locale1` to `"en-US"` and `locale2` to `"pt-BR"`, and `fileName` to `"state_of_html_2023.yml"`. After running the script, a Markdown file named `missing-keys-state_of_html_2023.md` will be generated in the `./docs/pt-BR` directory containing the list of missing keys.
