import type { Metadata } from 'next';import './globals.css';import {Shell} from '@/components/shell';
export const metadata:Metadata={title:'CSTUICTSyl — ICT Curriculum Portal',description:'CSTU Bachelor of Science in ICT curriculum, course details, GPA and CGPA calculators.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}
