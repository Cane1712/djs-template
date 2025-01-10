import { Events } from "discord.js";
import { Bot } from "./src/types/client";

const client = new Bot();

client.on(Events.InteractionCreate, async interaction => {
    // if its not a command cancel
    if (!interaction.isCommand()) return;
    // fetch the command... 
    const command = client.commands.get(interaction.commandName);
    // and if it doesnt exist cancel
    if (!command) return await interaction.reply({ content: 'Command out of date', ephemeral: true });

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Error executing!', ephemeral: true });
    }
})

client.on(Events.ClientReady, async (_client) => {
    console.log(`Bot is ready as ${_client.user.tag}`)
    await client.loadCommands();
})

client.login(process.env.DISCORD_TOKEN)