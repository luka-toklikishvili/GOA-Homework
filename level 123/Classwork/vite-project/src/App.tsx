export interface StudentInfo {
  id: number;
  name: string;
  age: number;
  grade: string;
  schoolName: string;
}
export interface StudentPoints {
  studentId: number;   
  subject: string;     
  points: number;      
  isPassed: boolean;   
}
const student: StudentInfo = {
  id: 1,
  name: "Luka Toklikishvili",
  age: 16,
  grade: "10th Grade",
  schoolName: "Tbilisi Public School #100"
};

const mathPoints: StudentPoints = {
  studentId: 1,
  subject: "Mathematics",
  points: 92,
  isPassed: true
};

console.log(student, mathPoints);

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App

