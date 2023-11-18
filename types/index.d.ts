export { Project };

declare global {
    interface Project {
        id: string,
        isDark: boolean,
        title: string,
        url: string,
        logoUrl: string,
        bgUrl: string,
        bgColor: string,
        paragraphTitle: string,
        techIcons: string[],
        githubRepoUrl?: string,
        status: {
            message: string,
            negative: boolean,
        },
    }
}