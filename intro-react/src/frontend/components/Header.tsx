// components/Header.tsx
interface HeaderProps {
    student: string;
    degree: string;
    points: number;
}

function Header({ student, degree, points }: HeaderProps) {
    return (
        <div>
            <h1>{student}</h1>
            <p>{degree} {points} studiepoeng</p>
        </div>
    );
}

export default Header;