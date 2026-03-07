import type {BunFile} from "bun";

export async function generateEmail(templateName: string, data: Record<string, string>) {
    const htmlTemplatePath = `${import.meta.dir}/templates/${templateName}.html`;
    const textTemplatePath = `${import.meta.dir}/templates/${templateName}.txt`;

    const htmlFile: BunFile = Bun.file(htmlTemplatePath);
    const textFile: BunFile = Bun.file(textTemplatePath);

    if(!(await htmlFile.exists()) || !(await textFile.exists())) {
        throw new Error(`Template files not found for ${templateName}`);
    }

    let htmlContent = await htmlFile.text();
    let textContent = await textFile.text();

    for (const key in data) {
        const placeholder = `{${key}}`;
        htmlContent = htmlContent.replace(new RegExp(placeholder, 'g'), data[key] ?? '');
        textContent = textContent.replace(new RegExp(placeholder, 'g'), data[key] ?? '');
    }

    return {htmlContent, textContent};
}