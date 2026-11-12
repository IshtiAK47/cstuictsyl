# (ChatGPT made it...don't blame me)

# CSTUICTSyl

A small, database-free Next.js portal for the Chandpur Science and Technology University (CSTU) Bachelor of Science in ICT curriculum (Session 2021–2022 onward).

## Features
- Dashboard with degree overview and semester summary
- Searchable, filterable curriculum for all eight semesters
- Course detail pages with credit/contact-hour metadata and extracted syllabus descriptions
- Optional course groups I, II and III
- Semester GPA calculator with curriculum credits prefilled
- CGPA calculator and target CGPA planner
- Grading scale, assessment distribution and academic regulations
- Responsive sidebar and modern minimal visual design
- Entire curriculum stored locally in `src/data/curriculum.json`; no database or backend

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

Import this project into Vercel and use the default Next.js build settings. No environment variables are required.

## Source and accuracy notes

Content is transcribed from the uploaded `whole syllabus.pdf`, titled *Curriculum for Bachelor of Science in ICT Program, Session 2021–2022 to Onward*.

The source distribution table lists Data Communication as ICT 2105/2106, while its detailed course section labels the course ICT 2107/2108. This app keeps the distribution-table codes and notes the discrepancy. The curriculum's GPA section states that F grades are excluded from GPA calculation; the GPA calculator follows that rule by default but allows the user to change the exclusion setting.

Some detailed course descriptions could not be confidently extracted from the PDF text layer; these course pages explicitly identify when a separate description was not available rather than inventing one.
