import path from 'path';
import {render} from "jsx-email";

export async function generateJSXEmail(
    templateName: string,
    data: Record<string, string>
): Promise<{htmlContent: string, textContent: string}> {
    const baseDir = import.meta.dir;
    const templatePath = path.join(baseDir, 'templates', `${templateName}.tsx`);

    // Dynamically import the template
    const templateModule = await import(templatePath);
    const Template = templateModule.default || templateModule.Template;

    if (!Template) {
        throw new Error(`Template not found or has no default export: ${templateName}`);
    }

    const html = await render(<Template {...data} />, {
        inlineCss: true
    });

    const plainText = await render(<Template {...data} />, {
        plainText: true
    });

    return ({
        htmlContent: html,
        textContent: plainText
    });
}
