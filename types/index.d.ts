export { Project };

declare global {
    interface Project {
        id: number,
        isDark: boolean,
        title: string,
        url: string,
        logoUrl: string,
        bgUrl: string,
        paragraphTitle: string,
        techIcons: string[],
    }
}