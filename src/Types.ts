export interface GetNewsOptions {

    appId : number
    count ?: number
    maxLength ?: number

}

export interface GlobalAcheivementOptions {

    appId : number

}

export interface PlayerSummaryOptions {
    
    steamId : number | Array < number >
    
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

export interface GlobalAcheivementResult {

    appId : number
    acheivements : Array < {
        name : string, 
        percent : number
    } >

}

export interface PlayerSummaryResult {

    steamId : number
    username : string
    realName ?: string
    profileAvailable : boolean
    profilePictureURL ?: string 
    profilePictureBase64 ?: string
    currentStatus : number
    countryCode : string
    URL : string
    currentPlayingGameId ?: number
    currentPlayingGameName : string
    visiblityStatus : boolean
    allowsComments : boolean
    accountCreationTime ?: number
    lastLogOff ?: number

}

enum RelationShip {
    All = "all",
    Friends = "friend"
}

export interface FriendsListResult {

    friends : Array < {
        steamId : number,
        typeOfRelationShip : string,
        friendsSince : RelationShip
    } >

}

export interface PlayerAcheivementsResult {

    gameId : number
    gameName : string
    acheivements : Array< {
        name : string,
        achieved : boolean, 
        description ?: string, 
        unlockedTime ?: number
    } >

}

export interface PlayerOwnedGamesResult {

    numberOfGamesOwned : number
    games : Array< {
        gameId : number,
        gameName ?: string,
        totalPlayTime : number,
        macPlayTime : number,
        windowsPlayTime : number,
        linuxPlayTime : number,
        steamDeckPlayTime : number,
        lastPlayed ?: number,
        timePlayedOffline : number
    } >

}

export interface 