// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { yta } = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/youmaker`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const request = require(`request`);
const yts = require(`yt-search`);
const axios = require(`axios`);
const vers = require(`../../package.json`);
const fs = require(`fs`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `play`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}play <youtube song name>

🔸𝐔𝐬𝐢𝐧𝐠 𝐋𝐢𝐧𝐤? ${ᴋᴇɪ}ytaudio
🔎𝐒𝐞𝐚𝐫𝐜𝐡 𝐘𝐨𝐮𝐓𝐮𝐛𝐞? ${ᴋᴇɪ}ytsearch`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (Needs.length === 0) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ
          .ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            ꜱᴇɴᴅᴇʀɪᴅ,
            ꜱᴇɴᴅᴇʀeceived,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (𝓜𝖎𝖟𝖚ӄ𝖎.body.includes("http")) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ
          .ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            ꜱᴇɴᴅᴇʀɪᴅ,
            ꜱᴇɴᴅᴇʀeceived,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else {
        const LinkForGroups = await yts(Needs.join(` `));
        const GroupVideos = LinkForGroups.videos.slice(0, 1);
        const filename = `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${ꜱᴇɴᴅᴇʀɪᴅ}_${Date.now()}`;
        var DAudio = function (uri, filename, callback) {
          request.head(uri, function (ℓαвєяяσя, gotResp, body) {
            mime = gotResp.headers[`content-type`];
            request(uri)
              .pipe(fs.createWriteStream(filename))
              .on(`close`, callback);
          });
        };
        await GroupVideos.forEach(async function (youfound) {
          if (youfound.seconds > "1800") {
            console.log(`
${youfound.videoId}
${youfound.url}
${youfound.title}
${youfound.description}
${youfound.timestamp}
${youfound.duration}
${youfound.ago}
${youfound.views}
${youfound.author.name}
${youfound.thumbnail}`);
            const media = await ӄʀǟӄɨռʐ.prepareMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              { url: youfound.thumbnail },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
              }
            );
            const buttons = [
              {
                buttonId: `${ᴋᴇɪ}list`,
                buttonText: { displayText: `${ᴋᴇɪ}list` },
                type: 1,
              },
            ];
            const buttonMessage = {
              contentText: `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived}, ⭕𝐀𝐮𝐝𝐢𝐨
𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗼𝗼𝘀𝗲 𝗙𝗶𝗹𝗲 𝗦𝗺𝗮𝗹𝗹𝗲𝗿 𝗧𝗵𝗲𝗻 𝟯𝟬𝗺𝗶𝗻𝘂𝘁𝗲𝘀!


🍻𝐓𝐢𝐭𝐥𝐞⤞ ${youfound.title}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧⤞ ${youfound.description}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}`,
              footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
                4
              )}s_\n📅ᴅᴀᴛᴇ: _${Clock}_`,
              buttons: buttons,
              headerType: 4,
              imageMessage: media.message.imageMessage,
            };
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                buttonMessage,
                MessageType.buttonsMessage,
                {
                  quoted: chat,
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                }
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
          } else {
            await yta(youfound.url)
              .then(async (gotResp) => {
                console.log(youfound.url);
                const { dl_link, thumb, title, filesizeF, filesize } = gotResp;
                const media = await ӄʀǟӄɨռʐ.prepareMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  { url: youfound.thumbnail },
                  MessageType.image,
                  {
                    mimetype: Mimetype.jpeg,
                  }
                );
                await ӄʀǟӄɨռʐ
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    {
                      contentText: `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived},    
⭕𝐀𝐮𝐝𝐢𝐨 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗼𝗳 𝐀𝐮𝐝𝐢𝐨!


🍻𝐓𝐢𝐭𝐥𝐞⤞ ${youfound.title}
🙈𝐕𝐢𝐞𝐰𝐬⤞ ${youfound.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫⤞ ${youfound.author.name}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧⤞ ${youfound.description}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}`,
                      footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
                        4
                      )}s_\n📅ᴅᴀᴛᴇ: _${Clock}_`,
                      buttons: [
                        {
                          buttonId: `${ᴋᴇɪ}happy`,
                          buttonText: { displayText: `${ᴋᴇɪ}happy` },
                          type: 1,
                        },
                      ],
                      headerType: 4,
                      imageMessage: media.message.imageMessage,
                    },
                    MessageType.buttonsMessage,
                    {
                      quoted: chat,
                      contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                    }
                  )
                  .catch((ℓαвєяяσя) =>
                    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                  );
                axios
                  .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                  .then(async (a) => {
                    DAudio(dl_link, filename, async function () {
                      await ӄʀǟӄɨռʐ
                        .sendMessage(
                          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                          fs.readFileSync(filename),
                          MessageType.audio,
                          {
                            quoted: chat,
                            mimetype: Mimetype.mp4Audio,
                          }
                        )
                        .then(fs.unlinkSync(filename))
                        .catch((ℓαвєяяσя) =>
                          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                        );
                    });
                  });
              })
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
          }
        });
      }
    } catch (ℓαвєяяσя) {
      await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(
        `⬡==========================⬡    🍁 ` +
          ℓαвєяяσя +
          `🍁    ⬡==========================⬡`
      );
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
