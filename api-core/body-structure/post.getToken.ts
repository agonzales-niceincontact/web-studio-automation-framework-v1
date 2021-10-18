export interface GetToken {
    grant_type: string,
    username: string,
    password: string,
    isMockEvolve: boolean,
    scope: string,
    Authorization: string
}