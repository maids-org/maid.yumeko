import { composer, middleware } from "@core/bot";
import * as consoles from "@layouts/consoles";
import * as message from "@layouts/messages";
import * as keyboard from "@layouts/keyboards";
import { TelegrafContext } from "telegraf/typings/context";

composer.action(`help`, async (ctx: TelegrafContext) => {
  await ctx.editMessageText(message.help, {
    parse_mode: "HTML",
    reply_markup: keyboard.help,
  });
});

middleware(composer);
consoles.module(__filename);
