/**
 * Keyboard Layout Manager
 * @module layouts/keyboards
 */
import { Markup } from "telegraf";
import { InlineKeyboardMarkup } from "telegraf/typings/telegram-types";

export const start = Markup.inlineKeyboard([
  [Markup.callbackButton("Show more information", "help")],
]);

export const help = Markup.inlineKeyboard([
  [Markup.urlButton("Announcement's Channel", "https://t.me/SeventyPlus")],
]);

export const invalid = Markup.inlineKeyboard([
  Markup.callbackButton(`Show available commands`, `help`),
]);

export const clubs = async (): Promise<InlineKeyboardMarkup> => {
  return Markup.inlineKeyboard([
    [Markup.urlButton(`Mad Maids`, `https://t.me/madmaids`)],
    [Markup.urlButton(`WIUT Anime Club`, `https://t.me/animeclubwest`)],
  ]);
};
