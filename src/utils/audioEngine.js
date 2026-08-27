// Web Audio API engine for authentic Indian Temple Soundscapes
class TempleAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.activeNodes = [];
    this.droneInterval = null;
    this.bellInterval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a metallic resonant temple bell (Ghanta)
  playTempleBell(pitch = 587.33, duration = 4.0) { // D5 note
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Harmonic frequencies of a traditional brass bell
    const harmonics = [
      { ratio: 1.0, gain: 0.7, decay: duration },
      { ratio: 2.02, gain: 0.45, decay: duration * 0.8 },
      { ratio: 3.01, gain: 0.35, decay: duration * 0.6 },
      { ratio: 4.18, gain: 0.25, decay: duration * 0.5 },
      { ratio: 5.43, gain: 0.15, decay: duration * 0.35 }
    ];

    harmonics.forEach(({ ratio, gain, decay }) => {
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = ratio === 1.0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(pitch * ratio, now);

      // Bell strike attack and exponential metallic decay
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(gain * 0.6, now + 0.015);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(gainNode);
      gainNode.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + decay);
    });
  }

  // Play Shankha (Sacred Conch blowing)
  playShankha() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const duration = 5.5;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'sawtooth';
    osc2.type = 'sine';

    // Conch base frequency around 220Hz with natural breath swell and rise
    const baseFreq = 220;
    osc1.frequency.setValueAtTime(baseFreq * 0.95, now);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 1.15, now + 1.5);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 1.0, now + 4.0);

    osc2.frequency.setValueAtTime(baseFreq * 1.9, now);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 2.3, now + 1.5);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 2.0, now + 4.0);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);
    filter.frequency.linearRampToValueAtTime(900, now + 2.0);
    filter.frequency.linearRampToValueAtTime(400, now + 5.0);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.4, now + 1.2);
    gainNode.gain.linearRampToValueAtTime(0.35, now + 3.8);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  // Start continuous meditative Om & Tanpura Drone
  startAmbientDrone() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    const now = this.ctx.currentTime;
    // 136.1 Hz (C#3) - The traditional cosmic frequency of OM
    const omFreq = 136.1;

    // Layer 1: Sub-bass fundamental sine
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(omFreq / 2, now); // 68.05 Hz
    subGain.gain.setValueAtTime(0.001, now);
    subGain.gain.linearRampToValueAtTime(0.18, now + 2.5);
    subOsc.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(now);
    this.activeNodes.push({ osc: subOsc, gain: subGain });

    // Layer 2: Warm Tanpura Drone (Sa & Pa overtones)
    const tones = [omFreq, omFreq * 1.5, omFreq * 2.0]; // Root, Fifth, Octave
    tones.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle breath LFO modulation (0.2 Hz slow wave)
      lfo.frequency.setValueAtTime(0.15 + idx * 0.05, now);
      lfoGain.gain.setValueAtTime(0.05, now);
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12 / (idx + 1), now + 3.0);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      lfo.start(now);
      this.activeNodes.push({ osc, gain, lfo });
    });

    // Periodic gentle temple chime every 9 seconds
    this.bellInterval = setInterval(() => {
      if (this.isPlaying) {
        this.playTempleBell(440 + Math.random() * 200, 5.0);
      }
    }, 9000);

    // Initial welcoming chime
    this.playTempleBell(523.25, 6.0);
  }

  stopAmbientDrone() {
    if (!this.isPlaying) return;
    this.isPlaying = false;

    if (this.bellInterval) {
      clearInterval(this.bellInterval);
      this.bellInterval = null;
    }

    if (this.ctx) {
      const now = this.ctx.currentTime;
      this.activeNodes.forEach(({ osc, gain, lfo }) => {
        try {
          if (gain) {
            gain.gain.linearRampToValueAtTime(0.0001, now + 1.0);
          }
          setTimeout(() => {
            if (osc) osc.stop();
            if (lfo) lfo.stop();
          }, 1100);
        } catch (e) {
          // ignore cleanup errors
        }
      });
      this.activeNodes = [];
    }
  }

  setVolume(val) {
    if (this.masterGain && this.ctx) {
      const safeVal = Math.max(0, Math.min(1, val));
      this.masterGain.gain.setValueAtTime(safeVal, this.ctx.currentTime);
    }
  }
}

export const templeAudio = new TempleAudioEngine();
