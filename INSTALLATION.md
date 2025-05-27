# Midi Fighter Twister Cubase Script - Installation Guide

This guide provides step-by-step instructions to get your Midi Fighter Twister working with Cubase using the custom MIDI Remote script.

## Prerequisites

- Steinberg Cubase 12 or later
- DJ TechTools Midi Fighter Twister
- Midi Fighter Utility software

## Step 1: Install the Script

1. Download all files from this repository.

2. Locate your Cubase MIDI Remote Driver Scripts folder:
   - **Windows**: `C:\Users\<Username>\Documents\Steinberg\Cubase\MIDI Remote\Driver Scripts\Local`
   - **Mac**: `/Users/<Username>/Documents/Steinberg/Cubase/MIDI Remote/Driver Scripts/Local`

3. Create the following folder structure:
   ```
   Local/
   └── DJTechTools/
       └── MidiFighterTwister/
   ```

4. Copy the `MidiFighterTwister_Cubase.js` file into the MidiFighterTwister folder.

## Step 2: Configure the Midi Fighter Twister

1. Download and install the [Midi Fighter Utility](https://store.djtechtools.com/pages/midi-fighter-utility) if you haven't already.

2. Connect your Midi Fighter Twister to your computer via USB.

3. Open the Midi Fighter Utility software.

4. Configure the encoders, buttons, and LEDs according to the `MidiFighterTwister_Cubase_Config.txt` file. The key settings are:

   - Set all encoders to use relative mode (ENC 3FH/41H)
   - Assign CCs 0-15 to the main encoders
   - Assign CCs 16-31 to the encoder buttons
   - Assign CCs 32-34 to the left side buttons
   - Assign CCs 35-37 to the right side buttons
   - Set all encoders to use MIDI channel 1

5. Save your configuration to the device.

## Step 3: Set Up in Cubase

1. Start Cubase.

2. Make sure your Midi Fighter Twister is connected to your computer.

3. Open the MIDI Remote panel:
   - Go to Studio > MIDI Remote

4. The script should automatically detect your Midi Fighter Twister.

5. If it doesn't appear automatically:
   - Click "Add MIDI Controller Surface"
   - Look for "DJ TechTools" > "Midi Fighter Twister"
   - Select it and click "Add"

6. The virtual Midi Fighter Twister should now appear in the MIDI Remote panel.

7. Make sure the correct MIDI input and output ports are selected:
   - Input: Midi Fighter Twister
   - Output: Midi Fighter Twister

## Step 4: Test the Setup

1. The default page is the Mixer page. Try the following:
   - Turn the top row encoders to adjust track volumes
   - Press the top row encoder buttons to mute/unmute tracks
   - Use the right side buttons to switch between pages

2. If the LED feedback is not working:
   - Make sure "Send feedback to controller" is enabled in MIDI Remote settings
   - Check that the correct output port is selected

## Troubleshooting

### Controller not detected
- Make sure the Midi Fighter Twister is connected before starting Cubase
- Check if the device appears in your system's MIDI device list
- Try a different USB port or cable

### Controls not responding correctly
- Verify that all encoders are set to "ENC 3FH/41H" mode in the Midi Fighter Utility
- Make sure the MIDI channel is set to 1 for all controls
- Check the CC assignments match what's expected in the script

### No LED feedback
- Ensure the correct MIDI output port is selected in Cubase
- Verify that "Send feedback to controller" is enabled
- Make sure the Midi Fighter Twister is configured to receive LED feedback via MIDI CC

### Script not loading
- Check that the script is in the correct location
- Restart Cubase
- Click "Reload Scripts" in the MIDI Remote panel

## Next Steps

Refer to the following documents for more information:
- `README.md` - Overview and features
- `ControllerLayout.md` - Detailed control mapping reference
- `MidiFighterTwister_Cubase_Config.txt` - Detailed hardware configuration guide 