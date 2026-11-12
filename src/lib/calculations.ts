export const gradePoints = [4,3.75,3.5,3.25,3,2.75,2.5,2.25,2,0];
export const gradeLabels = ['A+','A','A-','B+','B','B-','C+','C','D','F'];
export function calculateGpa(rows:{credits:number; point:number; included?:boolean}[]) {
 const valid=rows.filter(r=>r.included!==false && r.credits>0 && Number.isFinite(r.point));
 const credits=valid.reduce((s,r)=>s+r.credits,0);
 const points=valid.reduce((s,r)=>s+r.credits*r.point,0);
 return {gpa:credits?points/credits:0,credits,points};
}
export function calculateCgpa(previousGpa:number,previousCredits:number,semesterGpa:number,semesterCredits:number) {
 const total=previousCredits+semesterCredits;
 return total>0?(previousGpa*previousCredits+semesterGpa*semesterCredits)/total:0;
}
