# bli-download

一个简单的解析接口聚合，使用nest编写
**仅供学习交流，严禁用于商业用途!**

## 使用
访问https://bili.xiaohan-kaka.gay/docs 查看接口文档

## 獲取視頻流
```
https://bili.xiaohan-kaka.gay/getvideo?bvid=     //bv號
```

返回示例
```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "from": "local",
    "result": "suee",
    "message": "",
    "quality": 64,
    "format": "mp4720",
    "timelength": 6282219,
    "accept_format": "hdflv2,flv,mp4720,mp4",
    "accept_description": [
      "高清 1080P+",
      "高清 1080P",
      "高清 720P",
      "流畅 360P"
    ],
    "accept_quality": [
      112,
      80,
      64,
      16
    ],
    "video_codecid": 7,
    "seek_param": "start",
    "seek_type": "offset",
    "durl": [
      {
        "order": 1,
        "length": 6282219,
        "size": 1537479648,
        "ahead": "",
        "vhead": "",
        "url": "https://upos-hz-mirrorakam.akamaized.net/upgcxcode/06/89/1324668906/1324668906-1-192.mp4?e=ig8euxZM2rNcNbNM7wdVhwdlhbKMhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1710098989&gen=playurlv2&os=akam&oi=221574121&trid=b0605c7b751342bb9684816587bd360aT&mid=516951032&platform=html5&upsig=fe59d5b56b030e993f2af18b4e9d4697&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&hdnts=exp=1710093625~hmac=e84ffbe52d6f5d3e439a1f83e354c77255cce6429f78e56a0466eaa40f5d298e&bvc=vod&nettype=0&bw=244743&orderid=0,1&buvid=&build=0&mobi_app=&f=T_0_0&logo=80000000",
        "backup_url": null
      }
    ],
    "support_formats": [
      {
        "quality": 112,
        "format": "hdflv2",
        "new_description": "1080P 高码率",
        "display_desc": "1080P",
        "superscript": "高码率",
        "codecs": null
      },
      {
        "quality": 80,
        "format": "flv",
        "new_description": "1080P 高清",
        "display_desc": "1080P",
        "superscript": "",
        "codecs": null
      },
      {
        "quality": 64,
        "format": "mp4720",
        "new_description": "720P 高清",
        "display_desc": "720P",
        "superscript": "",
        "codecs": null
      },
      {
        "quality": 16,
        "format": "mp4",
        "new_description": "360P 流畅",
        "display_desc": "360P",
        "superscript": "",
        "codecs": null
      }
    ],
    "high_format": null,
    "last_play_time": 5722000,
    "last_play_cid": 1324668906,
    "view_info": null
  }
}
```

## 直接重定向至視頻url (可用於游戲内直接播放)
```
https://bili.xiaohan-kaka.gay/player?url=   // b站鏈接
```

## 獲取視頻信息
```
https://bili.xiaohan-kaka.gay/info?bvid=   //bv號
```

返回例子
```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "bvid": "BV15a4y1S7Wz",
    "aid": 663237119,
    "videos": 1,
    "tid": 29,
    "tname": "音乐现场",
    "copyright": 1,
    "pic": "http://i1.hdslb.com/bfs/archive/5c6674af33462518f7ee0dd74fd65002bb85c20d.jpg",
    "title": "绝佳视角 全球首次!!! Madeon b2b San Holo全程录制！！！",
    "pubdate": 1699359864,
    "ctime": 1699359865,
    "desc": "终于花了一下午时间把所有的拍摄素材整合起来了，现在：完整版奉上！！\n\n特别鸣谢：@Esatain  @沼跃咸鱼呀  @AlaemirYoung  \n\n网易云也上传全程音频了哦！！！欢迎关注我的网易云：Liusu-",
    "desc_v2": [
      {
        "raw_text": "终于花了一下午时间把所有的拍摄素材整合起来了，现在：完整版奉上！！\n\n特别鸣谢：",
        "type": 1,
        "biz_id": 0
      },
      {
        "raw_text": "Esatain",
        "type": 2,
        "biz_id": 16455886
      },
      {
        "raw_text": " ",
        "type": 1,
        "biz_id": 0
      },
      {
        "raw_text": "沼跃咸鱼呀",
        "type": 2,
        "biz_id": 8821733
      },
      {
        "raw_text": " ",
        "type": 1,
        "biz_id": 0
      },
      {
        "raw_text": "AlaemirYoung",
        "type": 2,
        "biz_id": 351634052
      },
      {
        "raw_text": " \n\n网易云也上传全程音频了哦！！！欢迎关注我的网易云：Liusu-",
        "type": 1,
        "biz_id": 0
      }
    ],
    "state": 0,
    "duration": 6283,
    "mission_id": 1704921,
    "rights": {
      "bp": 0,
      "elec": 0,
      "download": 1,
      "movie": 0,
      "pay": 0,
      "hd5": 1,
      "no_reprint": 1,
      "autoplay": 1,
      "ugc_pay": 0,
      "is_cooperation": 0,
      "ugc_pay_preview": 0,
      "no_background": 0,
      "clean_mode": 0,
      "is_stein_gate": 0,
      "is_360": 0,
      "no_share": 0,
      "arc_pay": 0,
      "free_watch": 0
    },
    "owner": {
      "mid": 329389096,
      "name": "Liusu_流苏",
      "face": "https://i1.hdslb.com/bfs/face/dd6bb1f08a10f35cbade17f9c17f23fa0e9a9996.jpg"
    },
    "stat": {
      "aid": 663237119,
      "view": 27253,
      "danmaku": 185,
      "reply": 376,
      "favorite": 1497,
      "coin": 932,
      "share": 397,
      "now_rank": 0,
      "his_rank": 0,
      "like": 1337,
      "dislike": 0,
      "evaluation": "",
      "vt": 0
    },
    "argue_info": {
      "argue_msg": "",
      "argue_type": 0,
      "argue_link": ""
    },
    "dynamic": "",
    "cid": 1324668906,
    "dimension": {
      "width": 1920,
      "height": 1080,
      "rotate": 0
    },
    "premiere": null,
    "teenage_mode": 0,
    "is_chargeable_season": false,
    "is_story": false,
    "is_upower_exclusive": false,
    "is_upower_play": false,
    "is_upower_preview": false,
    "enable_vt": 0,
    "vt_display": "",
    "no_cache": false,
    "pages": [
      {
        "cid": 1324668906,
        "page": 1,
        "from": "vupload",
        "part": "绝佳视角 全球首次!!! Madeon b2b San Holo全程录制！！！",
        "duration": 6283,
        "vid": "",
        "weblink": "",
        "dimension": {
          "width": 1920,
          "height": 1080,
          "rotate": 0
        },
        "first_frame": "http://i0.hdslb.com/bfs/storyff/n231107qn18uir2foothq41nzhm9nn24_firsti.jpg"
      }
    ],
    "subtitle": {
      "allow_submit": false,
      "list": []
    },
    "is_season_display": false,
    "user_garb": {
      "url_image_ani_cut": ""
    },
    "honor_reply": {},
    "like_icon": "",
    "need_jump_bv": false,
    "disable_show_up_info": false,
    "is_story_play": 1
  }
}
```

## 本地开发

```bash
$ pnpm install
```

### 啓動

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### 测试

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
## 鸣谢
灵感来源：[mmyo456/blidownload](https://github.com/mmyo456/blidownload)

[Nestjs](https://nestjs.com/)

[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

[pixiv-now](https://github.com/FreeNowOrg/PixivNow)



## 画饼
- [x] 直播解析
- [x] 搜索功能
- [x] 网易云音乐解析
- [ ] wbi接口

~~cookie自動刷新~~ 太複雜，拿無痕取cookie理論能長期存活
