import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'ESP-Countdown Timer | M Harsha Deepan',
  description:
    'A pocket countdown device built on an ESP32-C3 with an OLED display and DS3231 RTC, configured from a web page over USB.',
};

const features = [
  'Counts down to any event, then auto-advances to the next one in its group',
  'Up to 6 groups and 48 events, each with a name, start time, duration, icon and message',
  'Battery-backed DS3231 RTC keeps time when unplugged',
  '12 built-in icons plus up to 8 custom 16x16 pixel-art icons',
  'Configured entirely from a web page over USB (Web Serial), no WiFi needed',
  'Live mirror of the OLED on the web page, remote button presses, and time simulation for testing',
  'Import and export your whole setup as JSON',
];

const hardware: [string, string][] = [
  ['Board', 'ESP32-C3 Supermini'],
  ['Display', '0.96" 128x32 SSD1306 OLED'],
  ['Clock', 'DS3231 RTC'],
  ['Input', 'One push button'],
];

const controls: [string, string][] = [
  ['click', 'switch between the main screen and cycling pages'],
  ['double-click', 'jump to the next group'],
  ['long-press', 'dim / brighten the display'],
];

const wiring = `button  -> GPIO3 and GND
OLED    -> SDA GPIO4, SCL GPIO5, 3V3, GND
DS3231  -> SDA GPIO4, SCL GPIO5, 3V3, GND  (same I2C bus)`;

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section
      className="rounded-xl p-6 mb-4"
      style={{
        background: 'rgba(22,22,22,0.7)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <h2 className="text-xs font-mono mb-4 tracking-wider" style={{ color: '#525252' }}>
        <span style={{ color: '#4ade80' }}>$ </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Terminal({ lines }: { lines: ReactNode[] }) {
  return (
    <div
      className="rounded-lg p-4 font-mono text-xs space-y-1.5"
      style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.04)' }}
    >
      {lines.map((line, i) => (
        <div key={i} className="flex gap-2">
          <span style={{ color: '#4ade80' }}>›</span>
          <span style={{ color: '#a3a3a3' }}>{line}</span>
        </div>
      ))}
    </div>
  );
}

export default function EspCountdownTimerPage() {
  return (
    <main className="min-h-screen px-4 py-16 text-white" style={{ background: '#0f0f0f' }}>
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono mb-10 transition-colors hover:text-green-400"
          style={{ color: '#737373' }}
        >
          ← back to projects
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span
              className="text-xs font-mono px-2 py-0.5 rounded"
              style={{
                color: '#525252',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              hardware
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#4ade80' }} />
              <span className="text-xs font-mono" style={{ color: '#4ade80' }}>active</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#f5f5f5' }}>
            ESP-Countdown Timer
          </h1>
          <p className="mt-3 text-base" style={{ color: '#737373', lineHeight: '1.6' }}>
            A pocket countdown device with an OLED display and a battery-backed clock. Set it up once from a web
            page over USB, then it counts down on its own.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            {/* Plain <a>: this opens the standalone configurator page, not a Next route */}
            <a
              href="/esp-countdown"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-mono transition-colors hover:bg-green-500/20"
              style={{
                background: 'rgba(74,222,128,0.08)',
                border: '1px solid rgba(74,222,128,0.25)',
                color: '#4ade80',
              }}
            >
              <span aria-hidden>⚙</span> Setup/Configure your ESP-Countdown Device
            </a>
          </div>
        </header>

        <Card title="cat features.txt">
          <Terminal lines={features} />
        </Card>

        <Card title="cat hardware.txt">
          <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
            {hardware.map(([k, v]) => (
              <div key={k} className="contents">
                <span className="font-mono" style={{ color: '#525252' }}>{k}</span>
                <span style={{ color: '#d4d4d4' }}>{v}</span>
              </div>
            ))}
          </div>
          <pre
            className="mt-5 rounded-lg p-4 font-mono text-xs overflow-x-auto"
            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.04)', color: '#a3a3a3' }}
          >
            {wiring}
          </pre>
        </Card>

        <Card title="cat controls.txt">
          <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
            {controls.map(([k, v]) => (
              <div key={k} className="contents">
                <span className="font-mono" style={{ color: '#4ade80' }}>{k}</span>
                <span style={{ color: '#a3a3a3' }}>{v}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="cat setup.md">
          <ol className="space-y-3 text-sm list-decimal list-inside" style={{ color: '#a3a3a3', lineHeight: '1.6' }}>
            <li>
              Flash the firmware from the Arduino IDE with board <span className="font-mono" style={{ color: '#d4d4d4' }}>ESP32C3 Dev Module</span>,
              ESP32 core 3.x and the <span className="font-mono" style={{ color: '#d4d4d4' }}>U8g2</span> library.
              Set <span className="font-mono" style={{ color: '#d4d4d4' }}>Tools &gt; USB CDC On Boot: Enabled</span>, which the web link requires.
            </li>
            <li>
              Open the configurator on a desktop or laptop in <b style={{ color: '#d4d4d4' }}>Chrome or Edge</b> (it uses Web Serial and needs HTTPS).
            </li>
            <li>
              Press <span className="font-mono" style={{ color: '#d4d4d4' }}>Connect device</span> and pick the ESP32-C3 port. No hardware yet? <span className="font-mono" style={{ color: '#d4d4d4' }}>Try demo</span> works without a device.
            </li>
            <li>
              Edit your countdowns, then press <span className="font-mono" style={{ color: '#d4d4d4' }}>Save to device</span>.
            </li>
          </ol>
          <p className="mt-4 text-xs font-mono" style={{ color: '#525252' }}>
            Before you save a config, the device boots with a built-in CBSE 2027 exam schedule.
          </p>
          <a
            href="/esp-countdown"
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-mono transition-colors hover:bg-green-500/20"
            style={{
              background: 'rgba(74,222,128,0.08)',
              border: '1px solid rgba(74,222,128,0.25)',
              color: '#4ade80',
            }}
          >
            <span aria-hidden>⚙</span> Setup/Configure your ESP-Countdown Device
          </a>
        </Card>

        <div className="flex flex-wrap gap-1.5 mt-2">
          {['ESP32-C3', 'C++', 'Arduino', 'Web Serial', 'JavaScript'].map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded"
              style={{
                background: 'rgba(96,165,250,0.06)',
                border: '1px solid rgba(96,165,250,0.15)',
                color: '#60a5fa',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
