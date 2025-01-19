import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <a href="/" class="logo">
      <img src="/logo-v8.png" alt="SirenAI Logo" class="logo-image">
      SirenAI
    </a>
    <nav class="nav-links">
      <a href="https://docs.sirenai.org" class="nav-link">Docs</a>
      <a href="https://github.com/yunzaixi-dev/sirenai" class="nav-link">GitHub</a>
      <a href="https://discord.gg/mBD77vwUCB" class="nav-link">Community</a>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-logo">
      <img src="/logo-v7.png" alt="SirenAI Large Logo" class="hero-logo-image">
    </div>
    <h1>Open Source LLM Frontend</h1>
    <p>A Flutter-based reconstruction of SillyTavern. Delivering enhanced performance, improved security, and elegant user experience.</p>
    <div class="cta-buttons">
      <a href="https://docs.sirenai.org" class="button button-primary">Get Started</a>
      <a href="https://github.com/yunzaixi-dev/sirenai" class="button button-secondary">View Source</a>
    </div>
  </section>

  <section class="features">
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🚀</div>
        <h3>Performance Optimized</h3>
        <p>Complete Flutter reconstruction for significantly improved speed and responsiveness</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🔒</div>
        <h3>Security First</h3>
        <p>Client-side core logic processing with enhanced data security and privacy protection</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💫</div>
        <h3>Elegant Experience</h3>
        <p>Newly designed user interface for more intuitive and enjoyable interactions</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🔄</div>
        <h3>Perfect Compatibility</h3>
        <p>Maintaining compatibility with existing features while introducing innovations</p>
      </div>
    </div>
  </section>

  <section class="community">
    <h2>Join Our Community</h2>
    <div class="community-links">
      <a href="https://discord.gg/bNmEB4SK9h" class="community-link">LeiNao Community</a>
      <a href="https://discord.gg/f6VfJU86SQ" class="community-link">NiRen Community</a>
      <a href="https://discord.gg/mBD77vwUCB" class="community-link">Development Community</a>
    </div>
  </section>

  <footer>
    <div class="footer-links">
      <div>
        <a href="https://docs.sirenai.org/en/">English</a>
        <a href="https://docs.sirenai.org/zh/">中文</a>
      </div>
      <div>
        <a href="https://github.com/yunzaixi-dev/sirenai/blob/main/LICENSE">License</a>
        <a href="https://github.com/yunzaixi-dev/sirenai/graphs/contributors">Contributors</a>
        <a href="https://github.com/yunzaixi-dev/sirenai/issues">Issues</a>
      </div>
    </div>
  </footer>
`
