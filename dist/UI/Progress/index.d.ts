import React from 'react';
export interface ProgressProps {
    id: string;
    done: boolean;
    children: React.ReactNode;
    expiresIn?: number;
    progress: {
        startTime: number;
        endTime: number;
    };
}
declare const Progress: ({ id, children, progress, done, expiresIn }: ProgressProps) => JSX.Element;
export default Progress;
//# sourceMappingURL=index.d.ts.map