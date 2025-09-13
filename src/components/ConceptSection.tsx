import './ConceptSection.css';
interface ConceptSectionProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

export default function ConceptSection({ title, description, children }: ConceptSectionProps) {
    return (
        <section className="concept-section">
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
        </section>
    );
}