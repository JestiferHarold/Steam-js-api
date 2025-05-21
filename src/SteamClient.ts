import type {
    GetNewsOptions,
    GlobalAcheivementOptions,
    PlayerSummaryOptions,
    FriendListOptions,
    PlayerAcheivementOptions,
    PlayerOwnedGameOptions,
    RecentlyPlayedGamesOptions,
    GameNewsResult
} from "./Types.ts"

export class SteamClient {
    
    private steamAPI : number
    //@ts-ignore
    static const url : string = "http://api.steampowered.com"

    constructor(steamAPI : number) {
        this.steamAPI = steamAPI
    }

    public static async getGameUpdates(options : GetNewsOptions) {

        if (!options) {
            throw new Error("No options given")
        }

        if (!options.appId) {
            throw new Error("no Steam options")
        }
        
        let selection : string = options.appId + (options.count ? `&count=${options.count}` : "") + (options.maxLength ? `&maxalength=${options.maxLength}` : "") + "&format=json"

        let url : string  = SteamClient.url + "/ISteamNews/GetNewsForApp/v0002/?appid=" + selection

        let response = await fetch(url).then(json => json.json()).catch(
            error => {
                throw new Error("Error in fetching")
            }
        )

        let result : GameNewsResult = {
            appID : response.appnews.appid,
            //@ts-ignore
            news : (new Array().push(response.appnews.newsitems.forEach(element => {
                return {
                    newsTitle : element.title,
                    link : element.url,
                    content : element.contents,
                    date : element.time
                }
            })))
        }

        return result
    }
}