import raw from '@/data/curriculum.json';
export type Course = { code:string; title:string; credits:number; contactHours:number; semester:string; description:string; optionalGroup:string|null; type:string };
export const courses = raw.courses as Course[];
export const semesters = raw.semesters.map((s) => ({ name:s.name, courses:s.courses.map((entry) => { const [code,title]=entry.split('|'); return courses.find(c=>c.code===code && c.title===title)!; }) }));
export const optionalGroups = raw.optionalGroups as string[];
export const sourceNotes = raw.sourceNotes as string[];
export const gradeScale = [
 {grade:'A+',point:4,range:'80% and above'}, {grade:'A',point:3.75,range:'75% to less than 80%'}, {grade:'A-',point:3.5,range:'70% to less than 75%'},
 {grade:'B+',point:3.25,range:'65% to less than 70%'}, {grade:'B',point:3,range:'60% to less than 65%'}, {grade:'B-',point:2.75,range:'55% to less than 60%'},
 {grade:'C+',point:2.5,range:'50% to less than 55%'}, {grade:'C',point:2.25,range:'45% to less than 50%'}, {grade:'D',point:2,range:'40% to less than 45%'}, {grade:'F',point:0,range:'Less than 40%'}
];
export const semesterCredits = [21,21.75,21.75,20.5,18.75,19.5,18.75,18];
