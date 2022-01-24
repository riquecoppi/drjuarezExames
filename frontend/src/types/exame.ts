export type Exame = {
    nidexam: number;
    cnomeexam: string;
    ccodiexam: string;
    
}

export type ExamePage = {
    content: Exame[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}