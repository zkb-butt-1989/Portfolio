import { createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";
import { profile, skillGroups } from "../src/content/profile";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outPath = join(root, "public", "ZubairKhalid-Resume.pdf");

const doc = new PDFDocument({
  size: "A4",
  margin: 42,
  info: {
    Title: `${profile.name} — CV`,
    Author: profile.name,
  },
});

doc.pipe(createWriteStream(outPath));

function heading(text: string) {
  doc.moveDown(0.45);
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#3f3f46")
    .text(text.toUpperCase(), { characterSpacing: 1.2 });
  doc
    .moveTo(doc.page.margins.left, doc.y + 2)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 2)
    .strokeColor("#d4d4d8")
    .lineWidth(0.6)
    .stroke();
  doc.moveDown(0.35);
  doc.fillColor("#18181b");
}

doc.font("Helvetica-Bold").fontSize(20).fillColor("#18181b").text(profile.name);
doc.font("Helvetica").fontSize(11).fillColor("#3f3f46").text(profile.title);
doc
  .fontSize(9)
  .fillColor("#52525b")
  .text(
    `${profile.location}  ·  ${profile.phone}  ·  ${profile.email}  ·  ${profile.linkedinLabel}`,
  );

heading("Summary");
doc.font("Helvetica").fontSize(9.5).fillColor("#18181b").text(profile.summary, {
  lineGap: 1.5,
});

heading("Selected apps");
for (const project of profile.projects) {
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#18181b")
    .text(project.name, { continued: true });
  doc.font("Helvetica").fillColor("#3f3f46").text(`  —  ${project.tagline}`);
  doc
    .fontSize(9)
    .fillColor("#18181b")
    .text(`${project.summary} ${project.role}. ${project.stack.join(", ")}.`, {
      lineGap: 1,
    });
  doc
    .fontSize(8)
    .fillColor("#52525b")
    .text(project.links.map((link) => link.href).join("   ·   "));
  doc.moveDown(0.25);
}

heading("Experience");
for (const job of profile.experience) {
  const left = `${job.title}  ·  ${job.company}`;
  const right = `${job.start} – ${job.end}`;
  const y = doc.y;
  doc.font("Helvetica-Bold").fontSize(10).fillColor("#18181b").text(left, {
    width: 360,
  });
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor("#52525b")
    .text(right, 400, y, { width: 150, align: "right" });
  doc.x = doc.page.margins.left;
  for (const bullet of job.bullets) {
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor("#18181b")
      .text(`•  ${bullet}`, { lineGap: 1.2 });
  }
  doc.moveDown(0.2);
}

heading("Skills");
for (const [group, items] of skillGroups) {
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#18181b")
    .text(`${group}: `, { continued: true });
  doc.font("Helvetica").text(items.join(", "));
}

heading("Education");
for (const item of profile.education) {
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#18181b")
    .text(item.credential);
  doc
    .font("Helvetica")
    .fontSize(9)
    .text(`${item.school}, ${item.place}  ·  ${item.dates}`);
}

heading("Certifications");
doc.font("Helvetica").fontSize(9).text(profile.certifications.join(", "));

function writePdf(): Promise<void> {
  return new Promise((resolve, reject) => {
    doc.on("end", () => resolve());
    doc.on("error", reject);
    doc.end();
  });
}

writePdf()
  .then(() => {
    console.log(`Wrote ${outPath}`);
  })
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  });
