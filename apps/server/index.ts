import {generateEmail} from "basic-bun-email";
import {generateMaizzleEmail} from "maizzle-email";
import {generateJSXEmail} from "jsx-email/index.tsx";
import {generateNunjucksEmail} from "nunjucks-email";

const userData: Record<string, string> = {
    name: "Chuck",
    email: "roundhouse@todaface.com",
    link: "https://api.chucknorris.io/"
};

const outputPath: string = './apps/server/dist';

// Basic Bun Example
async function main(): Promise<void>  {
    const email = await generateEmail("welcome", userData);

    console.log('Generated Basic Bun');
    console.log('Generated Email:: ', email.htmlContent);
    console.log('Generated Text File:: ', email.textContent);
    console.log('\n');
}

main().then(() => {
});

// Maizzle Example
async function maizzleMain(): Promise<void> {
    const email = await generateMaizzleEmail("welcome", userData);

    console.log('Generated Maizzle::\n');
    console.log('Generated Email:: ', email.htmlContent);
    console.log('Generated Text File:: ', email.textContent);
    console.log('\n');

    await Bun.write(`${outputPath}/maizzle/output.html`, email.htmlContent);
    await Bun.write(`${outputPath}/maizzle/output.txt`, email.textContent);
}

maizzleMain().then(() => {
});

// JSX Email Example
async function jsxEmailMain(): Promise<void>  {
    const {htmlContent, textContent} = await generateJSXEmail("BatmanEmail", userData);

    console.log('Generated JSX::\n');
    console.log('Generate Email:: ', htmlContent, '\n');
    console.log('Generate Text:: ', textContent);
    console.log('\n');

    await Bun.write(`${outputPath}/jsx-email/output.html`, htmlContent);
    await Bun.write(`${outputPath}/jsx-email/output.txt`, textContent);
}

jsxEmailMain().then(() => {
});

// Nunjucks Email Example
async function nunjucksEmailMain(): Promise<void>  {
    const tempData: Record<string, string | boolean> = {
        name: 'Bruce Wayne',
        link: 'https://superheroapi.com/api/{api-key}/search/batman',
        injured: false,
        night: true
    };
    const {htmlContent, textContent} = await generateNunjucksEmail("welcome", tempData);

    console.log('Nunjucks Email Example::\n');
    console.log('Generate Email:: ', htmlContent, '\n');
    console.log('Generate Text:: ', textContent);
    console.log('\n');

    await Bun.write(`${outputPath}/nunjucks-email/output.html`, htmlContent);
    await Bun.write(`${outputPath}/nunjucks-email/output.txt`, textContent);
}

nunjucksEmailMain().then(() => {
});