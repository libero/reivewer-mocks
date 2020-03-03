enum FileStatus {
    CREATED = 'CREATED',
    UPLOADED = 'UPLOADED',
    STORED = 'STORED',
    CANCELLED = 'CANCELLED',
}

enum FileType {
    MANUSCRIPT_SOURCE_PENDING = 'MANUSCRIPT_SOURCE_PENDING',
    MANUSCRIPT_SOURCE = 'MANUSCRIPT_SOURCE',
    SUPPORTING_FILE = 'SUPPORTING_FILE',
}

export const uploadManuscript = (submissions): ((_, { id }) => string | undefined) => (_, { id }) => {
    const submissionIndex = submissions.findIndex(submission => submission.id === id);
    if (submissionIndex !== -1) {
        return {
            ...submissions[submissionIndex],
            ...{
                file: {
                    id: '0ee77f61-b89d-40cd-893e-88089359eb6b',
                    type: FileType.MANUSCRIPT_SOURCE,
                    filename: 'somefile',
                    url: 'http://localhost/bucket/name.pdf',
                    mimeType: 'application/pdf',
                    size: '1000',
                    status: FileStatus.UPLOADED,
                },
            },
        };
    }

    throw new Error("can't find submission: " + id);
};
