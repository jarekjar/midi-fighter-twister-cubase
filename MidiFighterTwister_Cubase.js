/**
 * Midi Fighter Twister Script for Cubase
 * Author: Jared
 * Version: 1.0
 * 
 * This script provides a comprehensive MIDI Remote setup for the DJ TechTools Midi Fighter Twister
 * controller to work with Cubase. It provides control over EQ, plugins, transport, and mixing.
 */

var midiremote_api = require('midiremote_api_v1');

// Driver Setup
var deviceDriver = midiremote_api.makeDeviceDriver('DJ TechTools', 'Midi Fighter Twister', 'Jared');

// Create ports
var midiInput = deviceDriver.mPorts.makeMidiInput();
var midiOutput = deviceDriver.mPorts.makeMidiOutput();

// Define surface layout
var surface = deviceDriver.mSurface;

// Set automatic detection for Midi Fighter Twister
deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
    .expectInputNameEquals('Midi Fighter Twister')
    .expectOutputNameEquals('Midi Fighter Twister');

// Create the 16 encoders
var encoders = [];
var encoderButtons = [];

// Encoder arrangement (4x4 grid):
// 0  1  2  3
// 4  5  6  7
// 8  9  10 11
// 12 13 14 15

// Create encoders
for (var row = 0; row < 4; row++) {
    for (var col = 0; col < 4; col++) {
        var index = row * 4 + col;
        encoders[index] = surface.makeKnob(col, row, 1, 1);
        encoderButtons[index] = surface.makeButton(col, row, 1, 1);
    }
}

// Create the 6 side buttons (3 on each side)
var leftButtons = [];
var rightButtons = [];

for (var i = 0; i < 3; i++) {
    leftButtons[i] = surface.makeButton(-1, i, 1, 1);
    rightButtons[i] = surface.makeButton(4, i, 1, 1);
}

// MIDI Bindings for encoders
// By default, we'll use the following CC assignments:
// Encoders 0-15: CC 0-15 on channel 1
// Encoder buttons 0-15: CC 16-31 on channel 1
// Left side buttons 0-2: CC 32-34 on channel 1
// Right side buttons 0-2: CC 35-37 on channel 1

// Bind encoders (relative - binary offset mode)
for (var i = 0; i < 16; i++) {
    encoders[i].mSurfaceValue.mMidiBinding
        .setInputPort(midiInput)
        .bindToControlChange(0, i)
        .setTypeRelativeBinaryOffset();
    
    encoderButtons[i].mSurfaceValue.mMidiBinding
        .setInputPort(midiInput)
        .bindToControlChange(0, i + 16);
}

// Bind side buttons
for (var i = 0; i < 3; i++) {
    leftButtons[i].mSurfaceValue.mMidiBinding
        .setInputPort(midiInput)
        .bindToControlChange(0, i + 32);
    
    rightButtons[i].mSurfaceValue.mMidiBinding
        .setInputPort(midiInput)
        .bindToControlChange(0, i + 35);
}

// Host Mapping
var mapping = deviceDriver.mMapping;

// Create pages for different functions
var mixerPage = mapping.makePage('Mixer');
var eqPage = mapping.makePage('EQ');
var pluginPage = mapping.makePage('Plugin Parameters');
var transportPage = mapping.makePage('Transport');

// Default to the mixer page
mapping.setActivePage(mixerPage);

// ============ MIXER PAGE ============
// In the mixer page, we'll control:
// - Volume for 8 tracks (encoders 0-7)
// - Pan for 8 tracks (encoders 8-15)
// - Mute/Solo with buttons

// Set up track bank of 8 tracks
var trackBank = mixerPage.mHostAccess.mTrackSelection.makeTrackBank(8);

// Volume controls (top two rows)
for (var i = 0; i < 8; i++) {
    var encoder = encoders[i];
    var track = trackBank.getTrack(i);
    var volume = track.mVolume;
    
    mixerPage.makeValueBinding(encoder.mSurfaceValue, volume);
    
    // Mute with encoder buttons (top row)
    var muteButton = encoderButtons[i];
    var mute = track.mMute;
    mixerPage.makeValueBinding(muteButton.mSurfaceValue, mute);
}

// Pan controls (bottom two rows)
for (var i = 0; i < 8; i++) {
    var encoder = encoders[i + 8];
    var track = trackBank.getTrack(i);
    var pan = track.mPan;
    
    mixerPage.makeValueBinding(encoder.mSurfaceValue, pan);
    
    // Solo with encoder buttons (bottom row)
    var soloButton = encoderButtons[i + 8];
    var solo = track.mSolo;
    mixerPage.makeValueBinding(soloButton.mSurfaceValue, solo);
}

// Track navigation with side buttons
var navigateLeft = mixerPage.mAction.mTrackBank.mAction.mShiftLeft;
var navigateRight = mixerPage.mAction.mTrackBank.mAction.mShiftRight;

mixerPage.makeActionBinding(leftButtons[0].mSurfaceValue, navigateLeft);
mixerPage.makeActionBinding(rightButtons[0].mSurfaceValue, navigateRight);

// ============ EQ PAGE ============
// The EQ page will provide control over the Channel EQ

// Create an EQ viewer for the selected track
var eqViewer = eqPage.mHostAccess.mTrackSelection.mMixerChannel.mInsertAndStripEffects.makeStripEffectViewer("EqViewer");

// Map EQ parameters for 4 bands
// For each band, we'll control:
// - Frequency
// - Gain
// - Q
// - Band Type

// Band 1 controls (first column)
var band1Freq = eqViewer.mParameterBankZone.makeParameter(0);
var band1Gain = eqViewer.mParameterBankZone.makeParameter(1);
var band1Q = eqViewer.mParameterBankZone.makeParameter(2);
var band1Type = eqViewer.mParameterBankZone.makeParameter(3);

// Band 2 controls (second column)
var band2Freq = eqViewer.mParameterBankZone.makeParameter(4);
var band2Gain = eqViewer.mParameterBankZone.makeParameter(5);
var band2Q = eqViewer.mParameterBankZone.makeParameter(6);
var band2Type = eqViewer.mParameterBankZone.makeParameter(7);

// Band 3 controls (third column)
var band3Freq = eqViewer.mParameterBankZone.makeParameter(8);
var band3Gain = eqViewer.mParameterBankZone.makeParameter(9);
var band3Q = eqViewer.mParameterBankZone.makeParameter(10);
var band3Type = eqViewer.mParameterBankZone.makeParameter(11);

// Band 4 controls (fourth column)
var band4Freq = eqViewer.mParameterBankZone.makeParameter(12);
var band4Gain = eqViewer.mParameterBankZone.makeParameter(13);
var band4Q = eqViewer.mParameterBankZone.makeParameter(14);
var band4Type = eqViewer.mParameterBankZone.makeParameter(15);

// Bind EQ parameters to encoders
// Column 1: Band 1
eqPage.makeValueBinding(encoders[0].mSurfaceValue, band1Freq);
eqPage.makeValueBinding(encoders[4].mSurfaceValue, band1Gain);
eqPage.makeValueBinding(encoders[8].mSurfaceValue, band1Q);
eqPage.makeValueBinding(encoders[12].mSurfaceValue, band1Type);

// Column 2: Band 2
eqPage.makeValueBinding(encoders[1].mSurfaceValue, band2Freq);
eqPage.makeValueBinding(encoders[5].mSurfaceValue, band2Gain);
eqPage.makeValueBinding(encoders[9].mSurfaceValue, band2Q);
eqPage.makeValueBinding(encoders[13].mSurfaceValue, band2Type);

// Column 3: Band 3
eqPage.makeValueBinding(encoders[2].mSurfaceValue, band3Freq);
eqPage.makeValueBinding(encoders[6].mSurfaceValue, band3Gain);
eqPage.makeValueBinding(encoders[10].mSurfaceValue, band3Q);
eqPage.makeValueBinding(encoders[14].mSurfaceValue, band3Type);

// Column 4: Band 4
eqPage.makeValueBinding(encoders[3].mSurfaceValue, band4Freq);
eqPage.makeValueBinding(encoders[7].mSurfaceValue, band4Gain);
eqPage.makeValueBinding(encoders[11].mSurfaceValue, band4Q);
eqPage.makeValueBinding(encoders[15].mSurfaceValue, band4Type);

// On/Off buttons for each band
eqPage.makeValueBinding(encoderButtons[0].mSurfaceValue, eqViewer.mBandOnOff.makeBandOnOffValue(0));
eqPage.makeValueBinding(encoderButtons[1].mSurfaceValue, eqViewer.mBandOnOff.makeBandOnOffValue(1));
eqPage.makeValueBinding(encoderButtons[2].mSurfaceValue, eqViewer.mBandOnOff.makeBandOnOffValue(2));
eqPage.makeValueBinding(encoderButtons[3].mSurfaceValue, eqViewer.mBandOnOff.makeBandOnOffValue(3));

// ============ PLUGIN PAGE ============
// The Plugin page will provide control over VST plugin parameters

// Create a parameter bank for the first insert effect on the selected track
var pluginViewer = pluginPage.mHostAccess.mTrackSelection.mMixerChannel.mInsertAndStripEffects.makeInsertEffectViewer("PluginViewer");

// Set parameter bank size to 16 to map all encoders
pluginViewer.mParameterBankZone.setSize(16);

// Map plugin parameters to encoders
for (var i = 0; i < 16; i++) {
    var parameter = pluginViewer.mParameterBankZone.makeParameter(i);
    pluginPage.makeValueBinding(encoders[i].mSurfaceValue, parameter);
}

// Encoder buttons for plugin parameter page navigation and plugin insert selection
var previousParameterPage = pluginViewer.mAction.mPrevParameterPage;
var nextParameterPage = pluginViewer.mAction.mNextParameterPage;
var previousInsert = pluginViewer.mAction.mPrev;
var nextInsert = pluginViewer.mAction.mNext;

pluginPage.makeActionBinding(leftButtons[0].mSurfaceValue, previousParameterPage);
pluginPage.makeActionBinding(rightButtons[0].mSurfaceValue, nextParameterPage);
pluginPage.makeActionBinding(leftButtons[1].mSurfaceValue, previousInsert);
pluginPage.makeActionBinding(rightButtons[1].mSurfaceValue, nextInsert);

// ============ TRANSPORT PAGE ============
// The Transport page will provide control over transport functions

var transport = transportPage.mHostAccess.mTransport;

// Play, Stop, Record
var playButton = encoderButtons[0];
var stopButton = encoderButtons[1];
var recordButton = encoderButtons[2];

transportPage.makeValueBinding(playButton.mSurfaceValue, transport.mStart);
transportPage.makeValueBinding(stopButton.mSurfaceValue, transport.mStop);
transportPage.makeValueBinding(recordButton.mSurfaceValue, transport.mRecord);

// Metronome, Loop, Punch In/Out
var metronomeButton = encoderButtons[4];
var loopButton = encoderButtons[5];
var punchInButton = encoderButtons[6];
var punchOutButton = encoderButtons[7];

transportPage.makeValueBinding(metronomeButton.mSurfaceValue, transport.mMetronomeActive);
transportPage.makeValueBinding(loopButton.mSurfaceValue, transport.mCycleActive);
transportPage.makeValueBinding(punchInButton.mSurfaceValue, transport.mPunchInActive);
transportPage.makeValueBinding(punchOutButton.mSurfaceValue, transport.mPunchOutActive);

// Tempo control
var tempoEncoder = encoders[8];
transportPage.makeValueBinding(tempoEncoder.mSurfaceValue, transport.mTempo);

// Position/Jog control
var positionEncoder = encoders[9];
transportPage.makeValueBinding(positionEncoder.mSurfaceValue, transport.mPosition);

// Zoom control (horizontal and vertical)
var horizontalZoomEncoder = encoders[10];
var verticalZoomEncoder = encoders[11];

transportPage.makeValueBinding(horizontalZoomEncoder.mSurfaceValue, transportPage.mHostAccess.mView.mHorizontalZoom);
transportPage.makeValueBinding(verticalZoomEncoder.mSurfaceValue, transportPage.mHostAccess.mView.mVerticalZoom);

// ============ PAGE NAVIGATION ============
// Use the right side buttons to switch between pages

// Right side buttons for page navigation
var mixerPageButton = rightButtons[0];
var eqPageButton = rightButtons[1];
var pluginPageButton = rightButtons[2];

// Map buttons to page switching actions
mapping.makeActionBinding(mixerPageButton.mSurfaceValue, mapping.mAction.mActivatePage(mixerPage));
mapping.makeActionBinding(eqPageButton.mSurfaceValue, mapping.mAction.mActivatePage(eqPage));
mapping.makeActionBinding(pluginPageButton.mSurfaceValue, mapping.mAction.mActivatePage(pluginPage));
mapping.makeActionBinding(leftButtons[2].mSurfaceValue, mapping.mAction.mActivatePage(transportPage));

// Set up LED feedback via MIDI for active page indication
mixerPageButton.mSurfaceValue.mOnProcessValueChange = function(activeDevice, value) {
    if (mapping.getActivePage() === mixerPage && value === 1) {
        midiOutput.sendMidi(activeDevice, [0xB0, 35, 127]);  // Light up the LED when page is active
    } else {
        midiOutput.sendMidi(activeDevice, [0xB0, 35, 0]);    // Turn off LED when page is inactive
    }
};

eqPageButton.mSurfaceValue.mOnProcessValueChange = function(activeDevice, value) {
    if (mapping.getActivePage() === eqPage && value === 1) {
        midiOutput.sendMidi(activeDevice, [0xB0, 36, 127]);
    } else {
        midiOutput.sendMidi(activeDevice, [0xB0, 36, 0]);
    }
};

pluginPageButton.mSurfaceValue.mOnProcessValueChange = function(activeDevice, value) {
    if (mapping.getActivePage() === pluginPage && value === 1) {
        midiOutput.sendMidi(activeDevice, [0xB0, 37, 127]);
    } else {
        midiOutput.sendMidi(activeDevice, [0xB0, 37, 0]);
    }
};

leftButtons[2].mSurfaceValue.mOnProcessValueChange = function(activeDevice, value) {
    if (mapping.getActivePage() === transportPage && value === 1) {
        midiOutput.sendMidi(activeDevice, [0xB0, 34, 127]);
    } else {
        midiOutput.sendMidi(activeDevice, [0xB0, 34, 0]);
    }
}; 