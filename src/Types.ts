export interface GetNewsOptions {

    appId : number
    count ?: number
    maxLength ?: number

}

export interface GlobalAcheivementOptions {

    appId : number

}

export interface PlayerSummaryOptions {
    
    steamId : number
    
}

export interface FriendListOptions {

    steamId : number
    relationShip ?: string

}

export interface PlayerAcheivementOptions {

    steamId : number
    addId : number

}

export interface PlayerOwnedGameOptions {

    steamId : number
    includeAppInfo ?: boolean
    includePlayedFreeGames ?: boolean

}
 
export interface RecentlyPlayedGamesOptions {

    steamId : number
    count ?: number

}

// Results

export interface GameNewsResult {

    appID : number
    news : Array < {
        newsTitle : string,
        link : string,
        content : string,
        date ?: number // unix time 
    } >

}

