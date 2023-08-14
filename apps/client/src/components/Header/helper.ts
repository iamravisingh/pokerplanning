export const isPlanningStarted = (): boolean => {
    const appUrl = new URL(window.location.href);
    return appUrl.searchParams.has("roomKey")
}