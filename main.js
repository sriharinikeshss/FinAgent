(function() {
    // Nav burger logic (existing)
    const burger = document.querySelector('.nav__burger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (burger && mobileMenu) {
        function toggleMenu() {
            if (burger.classList.contains('is-open')) closeMenu();
            else openMenu();
        }
        function openMenu() {
            burger.classList.add('is-open');
            burger.setAttribute('aria-expanded', 'true');
            mobileMenu.hidden = false;
        }
        function closeMenu() {
            burger.classList.remove('is-open');
            burger.setAttribute('aria-expanded', 'false');
            mobileMenu.hidden = true;
        }
        burger.addEventListener('click', toggleMenu);
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
        mobileMenu.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
    }

    // Backend Integration Logic
    const analyzeBtn = document.getElementById('analyze-btn');
    const stockSelect = document.getElementById('stock-select');
    const profileSelect = document.getElementById('profile-select');
    const loadingSpinner = document.getElementById('loading');
    const dashboard = document.getElementById('maafis-app');
    const closeDashBtn = document.getElementById('close-maafis-btn');
    const lede = document.querySelector('.lede');
    const actionsUi = document.querySelector('.actions');

    const API_URL = 'http://127.0.0.1:8000';

    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const stock = stockSelect.value;
            const profile = profileSelect.value;
            
            // Show loading state
            loadingSpinner.hidden = false;
            analyzeBtn.style.opacity = '0.5';
            analyzeBtn.style.pointerEvents = 'none';

            try {
                // Fetch profiles to get full payload object for /analyze
                const profileRes = await fetch(`${API_URL}/profiles`);
                const profileData = await profileRes.json();
                const userProfile = profileData.profiles[profile];

                // Send analysis request
                const res = await fetch(`${API_URL}/analyze`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        stock: stock,
                        user_profile: userProfile,
                        degraded_mode: true // Degraded initially just in case Mistral fails quickly
                    })
                });

                if (!res.ok) {
                    throw new Error('Analysis request failed');
                }
                const result = await res.json();
                
                renderDashboard(result);
            } catch (err) {
                console.error("Integration Error", err);
                alert("Failed to reach the Intelligence Engine. Please ensure the backend is running on localhost:8000.");
            } finally {
                loadingSpinner.hidden = true;
                analyzeBtn.style.opacity = '1';
                analyzeBtn.style.pointerEvents = 'auto';
            }
        });
    }

    if (closeDashBtn) {
        closeDashBtn.addEventListener('click', () => {
            dashboard.hidden = true;
            document.body.style.overflow = ''; // restore scrolling if needed
        });
    }

    function renderDashboard(data) {
        // Show Full Screen MAAFIS App
        dashboard.hidden = false;
        document.body.style.overflow = 'hidden'; 
        
        document.getElementById('dash-stock-name').textContent = `${data.stock} Overview`;
        document.getElementById('score-market').textContent = data.market_opportunity_score.toFixed(1);
        document.getElementById('verdict-market').textContent = data.market_agent.classification.toUpperCase();
        
        document.getElementById('score-gap').textContent = `${data.decision_gap.toFixed(1)}%`;
        document.getElementById('verdict-gap').textContent = `Bias: ${data.gap_classification}`;
        
        document.getElementById('verdict-headline').textContent = data.verdict_headline;
        document.getElementById('verdict-explanation').textContent = data.verdict_explanation;
        
        const debateContainer = document.getElementById('debate-messages');
        debateContainer.innerHTML = '';
        data.debate_messages.forEach(msg => {
            const div = document.createElement('div');
            // Simplified plain text for MAAFIS stream look
            div.innerHTML = `> [${msg.timestamp}] ${msg.agent_name}: ${msg.message}`;
            debateContainer.appendChild(div);
        });
    }
})();
