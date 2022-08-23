export function accountTruncate(account: string): string {
    if (!account || account === '') return
    const middle = account.substring(6, 38)
    const truncated = account.replace(middle, '…')
    return truncated
}