import nunjucks from 'nunjucks';
import path from 'path';
import { convert } from 'html-to-text';
import juice from 'juice';

export async function generateNunjucksEmail(
    templateName: string,
    data: Record<string, string | boolean>
): Promise<{ htmlContent: string, textContent: string }> {
    const baseDir = import.meta.dir;
    const templatesDir = path.join(baseDir, 'templates');

    const env = nunjucks.configure(templatesDir, {
        autoescape: true,
        noCache: true
    });

    const rendered = env.render(`${templateName}.njk`, data);
    const html = juice(rendered);
    const plainText = convert(html);

    return ({
        htmlContent: html,
        textContent: plainText
    });
}