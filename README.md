# Midi Fighter Twister Script for Cubase

This repository contains a MIDI Remote script for using the Midi Fighter Twister controller with Steinberg Cubase. The script provides comprehensive control over EQ, plugins, transport, and mixing functions.

## Contents

- `MidiFighterTwister_Cubase.js` - The MIDI Remote API script for Cubase
- `MidiFighterTwister_Cubase_Config.txt` - Configuration guide for the Midi Fighter Utility software
- `README.md` - This file

## Features

- **Mixer Page**: Control volume and pan for 8 tracks, with mute and solo functions
- **EQ Page**: Full control over the Channel EQ with frequency, gain, Q, and filter type for all 4 bands
- **Plugin Page**: Control of plugin parameters with navigation between parameter pages and inserts
- **Transport Page**: Transport controls, metronome, cycle, punch in/out, tempo, and zoom functions

## Installation

### Script Installation

1. Locate your Cubase MIDI Remote Driver Scripts folder:
   - **Windows**: `C:\Users\<Username>\Documents\Steinberg\Cubase\MIDI Remote\Driver Scripts\Local`
   - **Mac**: `/Users/<Username>/Documents/Steinberg/Cubase/MIDI Remote/Driver Scripts/Local`

2. Create a folder structure: `Local/DJTechTools/MidiFighterTwister/`

3. Copy the `MidiFighterTwister_Cubase.js` file into this folder.

4. Start or restart Cubase.

### Hardware Configuration

1. Download and install the [Midi Fighter Utility](https://store.djtechtools.com/pages/midi-fighter-utility) from DJ TechTools.

2. Connect your Midi Fighter Twister to your computer.

3. Open the Midi Fighter Utility and configure your device according to the instructions in `MidiFighterTwister_Cubase_Config.txt`.

4. Save your configuration to the device.

## Usage

### Connecting in Cubase

1. Open Cubase and create or load a project.

2. Open the MIDI Remote panel by selecting Studio > MIDI Remote.

3. If auto-detection works, the Midi Fighter Twister should appear automatically.

4. If not, click on "Add MIDI Controller Surface" and select "DJ TechTools" > "Midi Fighter Twister".

### Pages and Controls

The script organizes controls into four pages, accessible via the right-side buttons:

#### Mixer Page (Right Button 1)

- **Encoders 0-7**: Volume for 8 tracks
- **Encoder Buttons 0-7**: Mute for 8 tracks
- **Encoders 8-15**: Pan for 8 tracks
- **Encoder Buttons 8-15**: Solo for 8 tracks
- **Left Button 0/Right Button 0**: Track bank navigation (previous/next)

#### EQ Page (Right Button 2)

Each column controls one EQ band (1-4):
- **Row 1 Encoders**: Frequency
- **Row 2 Encoders**: Gain
- **Row 3 Encoders**: Q
- **Row 4 Encoders**: Filter Type
- **Encoder Buttons 0-3**: Band On/Off

#### Plugin Page (Right Button 3)

- **All 16 Encoders**: Control the active plugin's parameters
- **Left Button 0/Right Button 0**: Navigate parameter pages
- **Left Button 1/Right Button 1**: Navigate between insert effects

#### Transport Page (Left Button 3)

- **Encoder Button 0**: Play
- **Encoder Button 1**: Stop
- **Encoder Button 2**: Record
- **Encoder Button 4**: Metronome
- **Encoder Button 5**: Cycle (Loop)
- **Encoder Button 6/7**: Punch In/Out
- **Encoder 8**: Tempo
- **Encoder 9**: Position/Jog
- **Encoder 10/11**: Horizontal/Vertical Zoom

## Customization

You can customize the script by editing the `MidiFighterTwister_Cubase.js` file:

- Modify encoder assignments
- Change page functions
- Adjust LED feedback behavior
- Add new functionality

Be sure to reload the script in Cubase after making changes (click "Reload Scripts" in the MIDI Remote panel).

## Troubleshooting

- **No controller detection**: Make sure the Midi Fighter Twister is connected before starting Cubase, and check that the device name matches what's expected in the script.

- **Parameter feedback not working**: Check that "Send feedback to controller" is enabled in Cubase's MIDI Remote settings.

- **Encoders not responding correctly**: Verify that all encoders are set to "ENC 3FH/41H" mode in the Midi Fighter Utility.

- **Controls affecting the wrong parameters**: Make sure you're on the correct page. The right-side LEDs should indicate which page is active.

## Support and Contributions

If you encounter issues or have suggestions for improvements, please open an issue on this repository.

## License

This script is provided as-is with no warranty. Feel free to modify and distribute as needed.

## Acknowledgments

- Steinberg for the MIDI Remote API
- DJ TechTools for the Midi Fighter Twister hardware 