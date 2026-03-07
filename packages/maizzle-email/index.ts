import {render, generatePlaintext} from '@maizzle/framework';
import path from 'path';

export async function generateMaizzleEmail(templateName: string, data: Record<string, string>) {
  const baseDir = import.meta.dir;
  const templatePath = path.join(baseDir, 'emails', `${templateName}.html`);

  const templateFile = Bun.file(templatePath);

  if (!(await templateFile.exists())) {
    throw new Error(`Template file not found: ${templateName}`);
  }

  let template = await templateFile.text();

  for (const key in data) {
    const placeholder = `{{${key}}}`;
    template = template.replace(new RegExp(placeholder, 'g'), data[key] ?? '');
  }

  const {html} = await render(template, {
    tailwind: {
      config: path.join(baseDir, 'tailwind.config.js'),
    },
    components: {
      root: baseDir,
      folders: ['layouts', 'components'],
    },
    locals: data,
  });

  const textContent = await generatePlaintext(html);

  return {htmlContent: html, textContent};
}
