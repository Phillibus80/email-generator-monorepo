import {generateEmail} from "basic-bun-email";
import {generateMaizzleEmail} from "maizzle-email";
import {generateJSXEmail} from "jsx-email/index.tsx";

const userData = {
    name: "Chuck",
    email: "roundhouse@todaface.com",
    link: "https://api.chucknorris.io/"
};

const outputPath = './dist';

// Basic Bun Example
async function main() {
    const email = await generateEmail("welcome", userData);

    console.log('Generated Basic Bun');
    console.log('Generated Email:: ', email.htmlContent);
    console.log('Generated Text File:: ', email.textContent);
    console.log('\n');
}
main().then(() => {});

// Maizzle Example
async function maizzleMain() {
    const email = await generateMaizzleEmail("welcome", userData);

    console.log('Generated Maizzle::\n');
    console.log('Generated Email:: ', email.htmlContent);
    console.log('Generated Text File:: ', email.textContent);
    console.log('\n');

    await Bun.write(`${outputPath}/maizzle/output.html`, email.htmlContent);
    await Bun.write(`${outputPath}/maizzle/output.txt`, email.textContent);
}

maizzleMain().then(() => {});

// JSX Email Example
async function jsxEmailMain() {
    const {htmlContent, textContent} = await generateJSXEmail("BatmanEmail", userData);

    console.log('Generated JSX::\n');
    console.log('Generate Email:: ', htmlContent, '\n');
    console.log('Generate Text:: ', textContent);
    console.log('\n');

    await Bun.write(`${outputPath}/jsx-email/output.html`, htmlContent);
    await Bun.write(`${outputPath}/jsx-email/output.txt`, textContent);
}

jsxEmailMain().then(() => {});

// Nunjucks Email Example
async function nunjucksEmailMain() {
    console.log('Nunjucks Email Example');
}

nunjucksEmailMain().then(() => {});