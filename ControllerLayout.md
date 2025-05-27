# Midi Fighter Twister - Controller Layout Reference

This document provides a visual reference for the Midi Fighter Twister controller layout for each page in the Cubase script.

## Physical Layout Reference

The Midi Fighter Twister has 16 encoders arranged in a 4x4 grid, each with a push button function:

```
Top View:

    [L1]                [R1]
    [L2]                [R2]
    [L3]                [R3]

    [0]  [1]  [2]  [3]
    [4]  [5]  [6]  [7]
    [8]  [9]  [10] [11]
    [12] [13] [14] [15]
```

- `[0]` through `[15]` represent the 16 encoders (with push buttons)
- `[L1]`, `[L2]`, `[L3]` are the left side buttons
- `[R1]`, `[R2]`, `[R3]` are the right side buttons

## Page Navigation

- `[R1]` - Activate Mixer Page
- `[R2]` - Activate EQ Page
- `[R3]` - Activate Plugin Page
- `[L3]` - Activate Transport Page

## Mixer Page Layout

```
    [L1]: Track Bank Left    [R1]: Mixer Page (Active)
    [L2]: Track Sel. Prev    [R2]: EQ Page
    [L3]: Transport Page     [R3]: Plugin Page

    [Vol 1]  [Vol 2]  [Vol 3]  [Vol 4]
    [Vol 5]  [Vol 6]  [Vol 7]  [Vol 8]
    [Pan 1]  [Pan 2]  [Pan 3]  [Pan 4]
    [Pan 5]  [Pan 6]  [Pan 7]  [Pan 8]
```

**Encoder Functions:**
- Row 1-2: Track Volume for tracks 1-8
- Row 3-4: Track Pan for tracks 1-8

**Encoder Button Functions:**
- Row 1-2: Track Mute for tracks 1-8
- Row 3-4: Track Solo for tracks 1-8

**Side Button Functions:**
- `[L1]`: Navigate track bank left
- `[R1]`: Navigate track bank right
- `[L2]`: Select previous track
- `[R2]`: Select next track

## EQ Page Layout

```
    [L1]: Prev Page          [R1]: Mixer Page
    [L2]: Prev EQ            [R2]: EQ Page (Active)
    [L3]: Transport Page     [R3]: Plugin Page

    [B1 Freq] [B2 Freq] [B3 Freq] [B4 Freq]
    [B1 Gain] [B2 Gain] [B3 Gain] [B4 Gain]
    [B1 Q]    [B2 Q]    [B3 Q]    [B4 Q]
    [B1 Type] [B2 Type] [B3 Type] [B4 Type]
```

**Encoder Functions:**
- Column 1: Band 1 parameters (Frequency, Gain, Q, Type)
- Column 2: Band 2 parameters (Frequency, Gain, Q, Type)
- Column 3: Band 3 parameters (Frequency, Gain, Q, Type)
- Column 4: Band 4 parameters (Frequency, Gain, Q, Type)

**Encoder Button Functions:**
- Top Row (`[0]`, `[1]`, `[2]`, `[3]`): Band On/Off toggle for bands 1-4

**Side Button Functions:**
- `[L1]`: Previous parameter page
- `[R1]`: Next parameter page
- `[L2]`: Previous EQ preset
- `[R2]`: Next EQ preset

## Plugin Page Layout

```
    [L1]: Prev Param Page    [R1]: Mixer Page
    [L2]: Prev Insert        [R2]: EQ Page
    [L3]: Transport Page     [R3]: Plugin Page (Active)

    [Param 1] [Param 2] [Param 3] [Param 4]
    [Param 5] [Param 6] [Param 7] [Param 8]
    [Param 9] [Param 10][Param 11][Param 12]
    [Param 13][Param 14][Param 15][Param 16]
```

**Encoder Functions:**
- All 16 encoders: Plugin parameters 1-16

**Encoder Button Functions:**
- Various plugin-specific functions (bypass, preset navigation, etc.)

**Side Button Functions:**
- `[L1]`: Previous parameter page
- `[R1]`: Next parameter page
- `[L2]`: Previous insert effect
- `[R2]`: Next insert effect

## Transport Page Layout

```
    [L1]: Zoom Reset         [R1]: Mixer Page
    [L2]: Loop Set           [R2]: EQ Page
    [L3]: Transport Page (A) [R3]: Plugin Page

    [Play]    [Stop]    [Record]  [Return]
    [Metro]   [Loop]    [PunchIn] [PunchOut]
    [Tempo]   [Position][HZoom]   [VZoom]
    [Rewind]  [Forward] [Prev Mk] [Next Mk]
```

**Encoder Functions:**
- `[8]` (Tempo): Adjust project tempo
- `[9]` (Position): Adjust playback position
- `[10]` (HZoom): Horizontal zoom
- `[11]` (VZoom): Vertical zoom
- `[12]` (Rewind): Fast rewind
- `[13]` (Forward): Fast forward
- `[14]` (Prev Mk): Go to previous marker
- `[15]` (Next Mk): Go to next marker

**Encoder Button Functions:**
- `[0]` (Play): Toggle play
- `[1]` (Stop): Stop playback
- `[2]` (Record): Toggle record
- `[3]` (Return): Return to zero
- `[4]` (Metro): Toggle metronome
- `[5]` (Loop): Toggle loop
- `[6]` (PunchIn): Toggle punch in
- `[7]` (PunchOut): Toggle punch out

**Side Button Functions:**
- `[L1]`: Reset zoom level
- `[L2]`: Set loop points
- `[R1]`: Undo
- `[R2]`: Redo

## LED Color Reference

The RGB LEDs are configured with different colors to help identify function types:

- **Volume Controls**: Blue
- **Pan Controls**: Purple
- **EQ Frequency**: Red
- **EQ Gain**: Yellow
- **EQ Q**: Green
- **EQ Type**: Blue
- **Plugin Parameters**: White
- **Transport Controls**: Orange
- **Zoom Controls**: Cyan

## LED Indicator Behavior

- **On/Off Functions**: LED fully on or off
- **Value Parameters**: LED ring shows current value
- **Page Selection**: Side button LED on when page is active
- **Relative Controls**: LED ring moves relative to adjustment 