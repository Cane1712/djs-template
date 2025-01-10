import { type ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Repeats your message')
        .addStringOption(option =>
            option.setName('message')
            .setDescription('The message to repeat')
            .setRequired(true)),

    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.reply(interaction.options.getString('message') ?? "");
    }
}