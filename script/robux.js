// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', () => menu.classList.toggle('active'));

// Roblox Packages Logic
const usernameForm = document.getElementById('usernameForm');
const usernameInput = document.getElementById('usernameInput');
const loadingDiv = document.getElementById('loading');
const loadingText = document.getElementById('loadingText');
const packagesDiv = document.getElementById('packages');
const packageList = document.getElementById('packageList');
const cpaLocker = document.getElementById('cpa-locker');

const RobloxPackages = [
  { price: "$0.00", amount: "1,000", id: 1 },
  { price: "$1.00", amount: "5,000", id: 2 },
  { price: "$3.00", amount: "10,000", id: 3 },
  { price: "$5.00", amount: "25,000", id: 4 }
];

usernameForm.addEventListener('submit', e => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  if (!username) return;

  usernameForm.style.display = 'none';
  loadingText.textContent = `Loading packages for ${username}...`;
  loadingDiv.style.display = 'block';

  setTimeout(() => {
    loadingDiv.style.display = 'none';
    showPackages();
  }, 2000);
});

function showPackages() {
  packagesDiv.style.display = 'block';
  packageList.innerHTML = '';

  RobloxPackages.forEach(pkg => {
    const pkgDiv = document.createElement('div');
    pkgDiv.className = 'package';
    pkgDiv.innerHTML = `
      <div>
        <p class="price">${pkg.price}</p>
        <p>${pkg.amount} Robux</p>
      </div>
      <button class="select-btn" data-id="${pkg.id}">Select</button>
    `;
    packageList.appendChild(pkgDiv);
  });

  document.querySelectorAll('.select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      packagesDiv.style.display = 'none';
      cpaLocker.style.display = 'block';

      // Trigger content locker
      if (typeof _ZU === 'function') _ZU();
      if (typeof _CS === 'function') _CS();
      if (typeof _jb === 'function') _jb();
    });
  });
}
