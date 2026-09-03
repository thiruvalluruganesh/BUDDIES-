const STORAGE_KEY = "moments-memories";
const THEME_KEY = "moments-theme";

const filters = [
  { id: "original", name: "Original", css: "none" },
  { id: "vivid", name: "Vivid", css: "saturate(1.55) contrast(1.08)" },
  { id: "mono", name: "Mono", css: "grayscale(1) contrast(1.12)" },
  { id: "warm", name: "Warm", css: "sepia(.28) saturate(1.3) contrast(1.03)" },
  { id: "cool", name: "Cool", css: "hue-rotate(15deg) saturate(1.15) brightness(1.04)" },
  { id: "fade", name: "Fade", css: "contrast(.88) brightness(1.1) saturate(.8)" }
];

const albums = [
  { id: "all", name: "All", color: "#9ea7b0" },
  { id: "squad", name: "Squad", color: "#ff6b6b" },
  { id: "trips", name: "Trips", color: "#8b5cf6" },
  { id: "hangouts", name: "Hangouts", color: "#ffd166" },
  { id: "adventures", name: "Adventures", color: "#06d6a0" }
];

const moods = [
  { id: "fun", name: "Fun", emoji: "🎉" },
  { id: "goofy", name: "Goofy", emoji: "🤪" },
  { id: "chill", name: "Chill", emoji: "😎" },
  { id: "wild", name: "Wild", emoji: "🔥" },
  { id: "cozy", name: "Cozy", emoji: "🧸" },
  { id: "grateful", name: "Grateful", emoji: "💛" }
];

const reactionEmojis = [
  "❤️", "🔥", "😂", "😮", "🎉",
  "😍", "🤩", "👏", "🙌", "💯",
  "🍕", "🍔", "🍜", "☕", "🍻",
  "✈️", "🚗", "🏖️", "🏔️", "🌅",
  "🏀", "⚽", "🎮", "🎬", "🎵",
  "🐶", "🐱", "🌈", "🌸", "⭐"
];

const emojiSituations = {
  love: ["❤️", "😍", "🤩"],
  funny: ["😂", "🤣", "😆"],
  excited: ["🎉", "🙌", "🤩", "⭐"],
  shocked: ["😮", "😱", "🤯"],
  food: ["🍕", "🍔", "🍜", "☕", "🍻"],
  travel: ["✈️", "🚗", "🏖️", "🏔️", "🌅"],
  sport: ["🏀", "⚽", "🎮"],
  chill: ["😎", "🧸", "☕", "🌸"],
  night: ["🌙", "✨", "🔥"],
  nature: ["🌈", "🌸", "🏔️", "🌅"]
};

const poseIdeas = [
  {
    id: "group-hug",
    title: "The Group Hug",
    emoji: "🤗",
    description: "Squeeze in tight with your buddies, big smiles, arms around each other. Perfect for showing your bond.",
    tags: ["squad", "love", "cozy", "group"]
  },
  {
    id: "jump-shot",
    title: "The Jump Shot",
    emoji: "🦘",
    description: "Count to three and jump! Capture everyone mid-air for a fun, energetic buddy memory.",
    tags: ["squad", "fun", "wild", "excited"]
  },
  {
    id: "silly-faces",
    title: "Silly Faces",
    emoji: "🤪",
    description: "Forget perfect poses — make your goofiest faces. Great for inside jokes and goofy moods.",
    tags: ["goofy", "funny", "squad", "hangouts"]
  },
  {
    id: "back-to-back",
    title: "Back-to-Back",
    emoji: "🦸",
    description: "Stand back-to-back with arms crossed like a buddy superhero poster. Confident and iconic.",
    tags: ["squad", "cool", "adventures"]
  },
  {
    id: "hand-hearts",
    title: "Hand Hearts",
    emoji: "🫶",
    description: "Form a heart with your hands together, or make mini hearts around your faces.",
    tags: ["love", "squad", "cozy", "grateful"]
  },
  {
    id: "walk-away",
    title: "The Walk Away",
    emoji: "🚶",
    description: "Hold hands or walk side-by-side away from the camera toward a sunset, beach, or street.",
    tags: ["trips", "travel", "nature", "chill"]
  },
  {
    id: "point-at-landmark",
    title: "Point at the Landmark",
    emoji: "👉",
    description: "Everyone points at the Eiffel Tower, mountain peak, sign, or whatever makes the location special.",
    tags: ["trips", "travel", "adventures"]
  },
  {
    id: "map-pose",
    title: "Map Pose",
    emoji: "🗺️",
    description: "Hold up a map, guidebook, or phone map and pretend you're planning your next move.",
    tags: ["trips", "travel", "adventures", "lost"]
  },
  {
    id: "coffee-clink",
    title: "Coffee Clink",
    emoji: "☕",
    description: "Hold your cups together in the center of the frame. Works great at cafés and hangouts.",
    tags: ["hangouts", "food", "chill", "cozy"]
  },
  {
    id: "couch-flop",
    title: "The Couch Flop",
    emoji: "🛋️",
    description: "Pile onto a couch or floor, lounging naturally. Captures cozy, real friend energy.",
    tags: ["hangouts", "cozy", "chill", "squad"]
  },
  {
    id: "mirror-selfie",
    title: "Mirror Selfie Crew",
    emoji: "🪞",
    description: "Squeeze everyone into a mirror reflection. Best for dressing rooms, bathrooms, or lifts.",
    tags: ["hangouts", "squad", "night", "fun"]
  },
  {
    id: "high-five",
    title: "High Five Freeze",
    emoji: "🙌",
    description: "Capture the moment right before or during a high five. Sharp focus, big energy.",
    tags: ["squad", "sport", "fun", "excited"]
  },
  {
    id: "arms-wide",
    title: "Arms Wide Open",
    emoji: "🤲",
    description: "Stand at the edge of a cliff, beach, or rooftop with arms spread wide. Freedom vibes.",
    tags: ["adventures", "nature", "travel", "excited"]
  },
  {
    id: "climbing-pose",
    title: "The Climbing Pose",
    emoji: "🧗",
    description: "One foot up on a rock or ledge, hands on hips or pointing forward. Adventure ready!",
    tags: ["adventures", "nature", "mountain", "sport"]
  },
  {
    id: "food-cheers",
    title: "Food Cheers",
    emoji: "🍻",
    description: "Bring your plates, pizzas, or drinks together for a cheers shot from above or front.",
    tags: ["food", "hangouts", "party", "night"]
  },
  {
    id: "overhead-table",
    title: "Overhead Table",
    emoji: "🍕",
    description: "Shoot straight down at the food spread with hands reaching in. Hungry squad energy.",
    tags: ["food", "hangouts", "cozy"]
  },
  {
    id: "sunset-silhouette",
    title: "Sunset Silhouette",
    emoji: "🌅",
    description: "Stand in front of a sunset with your outlines dark and dramatic. No faces needed.",
    tags: ["nature", "trips", "chill", "love"]
  },
  {
    id: "beach-run",
    title: "Beach Run",
    emoji: "🏖️",
    description: "Run or splash through the waves together. Movement makes it feel alive and fun.",
    tags: ["beach", "travel", "fun", "wild"]
  },
  {
    id: "sand-lay",
    title: "Sand Angels",
    emoji: "⏳",
    description: "Lay in a circle on the sand or grass, heads together, looking up at the camera.",
    tags: ["beach", "nature", "squad", "cozy"]
  },
  {
    id: "dance-pose",
    title: "Dance Like Nobody's Watching",
    emoji: "💃",
    description: "Mid-dance move, arms up, hair flying. Best for parties, concerts, or night outs.",
    tags: ["party", "night", "wild", "fun"]
  },
  {
    id: "confetti-throw",
    title: "Confetti Throw",
    emoji: "🎊",
    description: "Throw confetti, leaves, or petals in the air and capture the celebration chaos.",
    tags: ["party", "excited", "celebration", "fun"]
  },
  {
    id: "pyramid",
    title: "The Buddy Pyramid",
    emoji: "🔺",
    description: "Stack yourselves into a safe, goofy human pyramid. Works with 3+ buddies.",
    tags: ["squad", "goofy", "fun", "party"]
  },
  {
    id: "sparklers",
    title: "Sparkler Circle",
    emoji: "🎇",
    description: "Stand in a circle at night holding sparklers or phone flashlights pointed inward.",
    tags: ["night", "party", "magic", "cozy"]
  },
  {
    id: "neon-sign",
    title: "Neon Sign Backdrop",
    emoji: "🌃",
    description: "Pose in front of a bright neon sign or city lights. Edgy and cinematic.",
    tags: ["night", "city", "cool", "party"]
  },
  {
    id: "flower-crown",
    title: "Flower Crown Pose",
    emoji: "🌸",
    description: "Make flower crowns, hold bouquets, or frame your faces with leaves and petals.",
    tags: ["nature", "spring", "chill", "love"]
  },
  {
    id: "tree-hug",
    title: "Tree Hug Squad",
    emoji: "🌳",
    description: "Everyone hug the same big tree or stand around it holding hands. Nature lover vibes.",
    tags: ["nature", "eco", "chill", "adventures"]
  },
  {
    id: "yoga-pose",
    title: "Buddy Yoga",
    emoji: "🧘",
    description: "Try a simple partner yoga pose or balance together. Calm, funny, or impressive.",
    tags: ["chill", "sport", "nature", "cozy"]
  },
  {
    id: "running-shot",
    title: "Running Together",
    emoji: "🏃",
    description: "Run toward the camera laughing. Great for sports days, races, or open fields.",
    tags: ["sport", "adventures", "fun", "wild"]
  },
  {
    id: "selfie-from-below",
    title: "Low Angle Selfie",
    emoji: "🤳",
    description: "Hold the phone low and look down with confident faces. Bold and flattering.",
    tags: ["squad", "cool", "hangouts", "night"]
  },
  {
    id: "shadow-pose",
    title: "Shadow Play",
    emoji: "👥",
    description: "Use strong sunlight to cast your shadows on a wall or pavement. Artsy and fun.",
    tags: ["nature", "creative", "sunny", "squad"]
  }
];

const photoInput = document.getElementById("photoInput");
const uploadArea = document.getElementById("uploadArea");
const uploadPlaceholder = document.getElementById("uploadPlaceholder");
const photoEditor = document.getElementById("photoEditor");
const photoPreview = document.getElementById("photoPreview");
const filterList = document.getElementById("filterList");
const albumList = document.getElementById("albumList");
const moodList = document.getElementById("moodList");
const locationInput = document.getElementById("locationInput");
const captionInput = document.getElementById("captionInput");
const characterCount = document.getElementById("characterCount");
const gallery = document.getElementById("gallery");
const emptyState = document.getElementById("emptyState");
const homeGallery = document.getElementById("homeGallery");
const homeEmptyState = document.getElementById("homeEmptyState");
const memoryCount = document.getElementById("memoryCount");
const clearAllButton = document.getElementById("clearAllButton");
const toast = document.getElementById("toast");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxMeta = document.getElementById("lightboxMeta");
const lightboxSocial = document.getElementById("lightboxSocial");
const commentsSection = document.getElementById("commentsSection");
const commentsList = document.getElementById("commentsList");
const commentInput = document.getElementById("commentInput");
const addCommentButton = document.getElementById("addCommentButton");
const lightboxDownload = document.getElementById("lightboxDownload");
const themeButton = document.getElementById("themeButton");
const saveMemoryButton = document.getElementById("saveMemoryButton");
const albumGrid = document.getElementById("albumGrid");
const galleryHeading = document.getElementById("galleryHeading");
const galleryEyebrow = document.getElementById("galleryEyebrow");
const showAllButton = document.getElementById("showAllButton");
const searchInput = document.getElementById("searchInput");
const surpriseButton = document.getElementById("surpriseButton");
const favoritesButton = document.getElementById("favoritesButton");
const confettiCanvas = document.getElementById("confettiCanvas");
const openMapButton = document.getElementById("openMapButton");
const useLocationButton = document.getElementById("useLocationButton");
const locationStatus = document.getElementById("locationStatus");
const aiAssistantButton = document.getElementById("aiAssistantButton");
const aiDialog = document.getElementById("aiDialog");
const aiClose = document.getElementById("aiClose");
const aiChips = document.getElementById("aiChips");
const aiSituationInput = document.getElementById("aiSituationInput");
const aiSuggestButton = document.getElementById("aiSuggestButton");
const aiSuggestion = document.getElementById("aiSuggestion");
const aiPoseEmoji = document.getElementById("aiPoseEmoji");
const aiPoseTitle = document.getElementById("aiPoseTitle");
const aiPoseDescription = document.getElementById("aiPoseDescription");
const aiPoseTags = document.getElementById("aiPoseTags");
const aiTryAgainButton = document.getElementById("aiTryAgainButton");
const appContent = document.getElementById("appContent");
const pullIndicator = document.getElementById("pullIndicator");
const createFab = document.getElementById("createFab");
const bottomNavItems = document.querySelectorAll(".nav-item");
const viewAllMemoriesButton = document.getElementById("viewAllMemoriesButton");
const appHeader = document.querySelector(".app-header");

let selectedImage = null;
let selectedFilter = filters[0];
let selectedAlbum = albums.find((a) => a.id === "squad");
let selectedMood = null;
let currentAlbumFilter = "all";
let searchQuery = "";
let showFavoritesOnly = false;
let memories = loadMemories();
let currentLightboxMemory = null;
let currentCoordinates = null;
let lastAiQuery = "";
let currentView = "home";

function loadMemories() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(data)) return [];
    return data.map((memory) => ({
      ...memory,
      album: memory.album || "squad",
      mood: memory.mood || null,
      favorite: !!memory.favorite,
      likes: typeof memory.likes === "number" ? memory.likes : 0,
      reactions: memory.reactions || {},
      comments: Array.isArray(memory.comments) ? memory.comments : [],
      location: memory.location || null,
      coordinates: memory.coordinates || null
    }));
  } catch {
    return [];
  }
}

function persistMemories() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
  } catch (error) {
    showToast("Could not save — storage may be full.");
    console.error(error);
  }
}

function vibrate(pattern = [8]) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

function showToast(message) {
  toast.textContent = message;
  window.clearTimeout(showToast.timer);
  toast.classList.add("visible");
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function triggerAnimation(element, animationClass) {
  if (!element) return;
  element.classList.remove(animationClass);
  void element.offsetWidth;
  element.classList.add(animationClass);
}

function formatDate(date) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function formatTime(date) {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}

function getAlbum(id) {
  return albums.find((album) => album.id === id) || albums[0];
}

function getMood(id) {
  return moods.find((mood) => mood.id === id) || null;
}

function buildMapsUrl(locationName, coordinates) {
  if (coordinates && typeof coordinates.lat === "number" && typeof coordinates.lng === "number") {
    return `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;
  }
  const query = encodeURIComponent((locationName || "").trim());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function openLocationInMaps(location) {
  if (!location) return;
  window.open(location.url || buildMapsUrl(location.name, location.coordinates), "_blank", "noopener,noreferrer");
}

function suggestEmojisForCaption(caption = "") {
  const text = caption.toLowerCase();
  const suggestions = new Set();

  if (/love|heart|miss|kiss|crush|date/.test(text)) emojiSituations.love.forEach(e => suggestions.add(e));
  if (/funny|lol|lmao|joke|haha|laugh/.test(text)) emojiSituations.funny.forEach(e => suggestions.add(e));
  if (/wow|omg|shock|crazy|unbelievable/.test(text)) emojiSituations.shocked.forEach(e => suggestions.add(e));
  if (/excited|yay|party|congrats|celebrate/.test(text)) emojiSituations.excited.forEach(e => suggestions.add(e));
  if (/pizza|burger|food|eat|lunch|dinner|breakfast|cafe|coffee|drink|beer/.test(text)) emojiSituations.food.forEach(e => suggestions.add(e));
  if (/trip|travel|road|beach|mountain|flight|vacation|hotel/.test(text)) emojiSituations.travel.forEach(e => suggestions.add(e));
  if (/game|sports|basketball|football|soccer|play|match/.test(text)) emojiSituations.sport.forEach(e => suggestions.add(e));
  if (/chill|relax|cozy|sleep|lazy|calm/.test(text)) emojiSituations.chill.forEach(e => suggestions.add(e));
  if (/night|club|party|drink|dark/.test(text)) emojiSituations.night.forEach(e => suggestions.add(e));
  if (/nature|flower|sunset|rainbow|park|tree|hike/.test(text)) emojiSituations.nature.forEach(e => suggestions.add(e));

  if (suggestions.size === 0) {
    ["❤️", "🔥", "😂", "🎉", "😍"].forEach(e => suggestions.add(e));
  }

  return Array.from(suggestions).slice(0, 8);
}

function renderFilters() {
  filterList.innerHTML = "";

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-option ${filter.id === selectedFilter.id ? "active" : ""}`;
    button.innerHTML = `
      <img src="${selectedImage}" alt="${filter.name} filter preview" style="filter:${filter.css}" />
      <span>${filter.name}</span>
    `;

    button.addEventListener("click", () => {
      selectedFilter = filter;
      photoPreview.style.filter = filter.css;
      vibrate([5]);
      triggerAnimation(button, "pop");
      renderFilters();
    });

    filterList.appendChild(button);
  });
}

function renderAlbumOptions() {
  albumList.innerHTML = "";

  albums.slice(1).forEach((album) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `album-option ${album.id === selectedAlbum.id ? "active" : ""}`;
    button.innerHTML = `
      <span class="album-dot" style="background:${album.color}"></span>
      <span>${album.name}</span>
    `;

    button.addEventListener("click", () => {
      selectedAlbum = album;
      vibrate([5]);
      triggerAnimation(button, "pop");
      renderAlbumOptions();
    });

    albumList.appendChild(button);
  });
}

function renderMoods() {
  moodList.innerHTML = "";

  const noneButton = document.createElement("button");
  noneButton.type = "button";
  noneButton.className = `mood-option ${selectedMood === null ? "active" : ""}`;
  noneButton.textContent = "None";
  noneButton.addEventListener("click", () => {
    selectedMood = null;
    vibrate([5]);
    triggerAnimation(noneButton, "pop");
    renderMoods();
  });
  moodList.appendChild(noneButton);

  moods.forEach((mood) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `mood-option ${selectedMood?.id === mood.id ? "active" : ""}`;
    button.innerHTML = `<span>${mood.emoji}</span><span>${mood.name}</span>`;

    button.addEventListener("click", () => {
      selectedMood = mood;
      vibrate([5]);
      triggerAnimation(button, "pop");
      renderMoods();
    });

    moodList.appendChild(button);
  });
}

function renderAlbums() {
  albumGrid.innerHTML = "";

  albums.forEach((album) => {
    const albumMemories = memories.filter(
      (memory) => album.id === "all" || (memory.album || "squad") === album.id
    );

    const card = document.createElement("button");
    card.type = "button";
    card.className = `album-card ${album.id === currentAlbumFilter ? "active" : ""}`;
    card.dataset.album = album.id;
    card.style.borderColor = album.id === currentAlbumFilter ? album.color : "transparent";

    const cover = albumMemories[0]?.image;
    const coverHtml = cover
      ? `<img class="album-cover" src="${cover}" alt="" />`
      : `<div class="album-cover-placeholder">✦</div>`;

    card.innerHTML = `
      ${coverHtml}
      <div class="album-meta">
        <p class="album-name">${album.name}</p>
        <p class="album-count">${albumMemories.length} ${albumMemories.length === 1 ? "moment" : "moments"}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      currentAlbumFilter = album.id;
      vibrate([10]);
      triggerAnimation(card, "pop");
      navigateTo("memories");
      renderGallery();
      renderAlbums();
    });

    albumGrid.appendChild(card);
  });
}

function openEditor(dataUrl) {
  selectedImage = dataUrl;
  selectedFilter = filters[0];
  selectedAlbum = albums.find((a) => a.id === "squad");
  selectedMood = null;
  currentCoordinates = null;
  photoPreview.src = dataUrl;
  photoPreview.style.filter = selectedFilter.css;
  uploadPlaceholder.classList.add("hidden");
  photoEditor.classList.remove("hidden");
  locationStatus.classList.add("hidden");
  locationStatus.classList.remove("has-coords");
  locationStatus.textContent = "";
  locationInput.value = "";
  renderFilters();
  renderAlbumOptions();
  renderMoods();
  triggerAnimation(photoEditor, "fadeInUp");
}

function resetEditor() {
  selectedImage = null;
  selectedFilter = filters[0];
  selectedAlbum = albums.find((a) => a.id === "squad");
  selectedMood = null;
  currentCoordinates = null;
  photoInput.value = "";
  photoInput.removeAttribute("capture");
  locationInput.value = "";
  captionInput.value = "";
  characterCount.textContent = "0";
  locationStatus.classList.add("hidden");
  locationStatus.classList.remove("has-coords");
  locationStatus.textContent = "";
  photoEditor.classList.add("hidden");
  uploadPlaceholder.classList.remove("hidden");
  triggerAnimation(uploadPlaceholder, "fadeIn");
}

function readImage(file) {
  if (!file || !file.type.startsWith("image/")) {
    showToast("Please choose a valid image file.");
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    openEditor(reader.result);
    showToast("Photo loaded! Now style your moment.");
  });
  reader.readAsDataURL(file);
}

function createFilteredImage() {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const maxSize = 1600;
      const scale = Math.min(1, maxSize / Math.max(image.naturalWidth, image.naturalHeight));

      canvas.width = Math.round(image.naturalWidth * scale);
      canvas.height = Math.round(image.naturalHeight * scale);

      const context = canvas.getContext("2d");
      context.filter = selectedFilter.css;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.88));
    };

    image.onerror = reject;
    image.src = selectedImage;
  });
}

function getCurrentLocation() {
  if (!navigator.geolocation) {
    showToast("Geolocation is not supported by your browser.");
    return;
  }

  useLocationButton.classList.add("locating");
  useLocationButton.disabled = true;
  showToast("Finding your exact location...");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude, accuracy } = position.coords;
      currentCoordinates = { lat: latitude, lng: longitude, accuracy };

      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`)
        .then(res => res.json())
        .then(data => {
          const placeName = data.display_name || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          locationInput.value = placeName.split(",").slice(0, 3).join(",");
          locationStatus.textContent = `📍 Exact location pinned (${accuracy.toFixed(0)}m accuracy)`;
          locationStatus.classList.remove("hidden");
          locationStatus.classList.add("has-coords");
          showToast("Exact location captured!");
        })
        .catch(() => {
          locationInput.value = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          locationStatus.textContent = `📍 Coordinates: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          locationStatus.classList.remove("hidden");
          locationStatus.classList.add("has-coords");
          showToast("Coordinates captured!");
        })
        .finally(() => {
          useLocationButton.classList.remove("locating");
          useLocationButton.disabled = false;
        });
    },
    (error) => {
      useLocationButton.classList.remove("locating");
      useLocationButton.disabled = false;
      let message = "Could not get location.";
      if (error.code === 1) message = "Location permission denied.";
      if (error.code === 2) message = "Location unavailable.";
      if (error.code === 3) message = "Location request timed out.";
      showToast(message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
  );
}

function matchesSearch(memory, query) {
  if (!query) return true;
  const term = query.toLowerCase();
  const caption = (memory.caption || "").toLowerCase();
  const album = getAlbum(memory.album || "squad").name.toLowerCase();
  const mood = getMood(memory.mood)?.name.toLowerCase() || "";
  const date = formatDate(new Date(memory.createdAt)).toLowerCase();
  const location = (memory.location?.name || "").toLowerCase();
  return caption.includes(term) || album.includes(term) || mood.includes(term) || date.includes(term) || location.includes(term);
}

function updateLightboxMeta(memory) {
  const album = getAlbum(memory.album || "squad");
  const mood = getMood(memory.mood);
  const date = formatDate(new Date(memory.createdAt));
  const coords = memory.coordinates
    ? `<span>🌐 ${memory.coordinates.lat.toFixed(4)}, ${memory.coordinates.lng.toFixed(4)}</span>`
    : "";
  const locationTag = memory.location
    ? `<span>📍 <a href="${memory.location.url}" target="_blank" rel="noopener noreferrer">${memory.location.name}</a></span>`
    : "";
  lightboxMeta.innerHTML = `
    <span style="background:${album.color}22;color:${album.color}">● ${album.name}</span>
    ${mood ? `<span>${mood.emoji} ${mood.name}</span>` : ""}
    <span>📅 ${date}</span>
    ${locationTag}
    ${coords}
  `;
}

function renderLightboxSocial(memory) {
  lightboxSocial.innerHTML = "";

  const likeButton = document.createElement("button");
  likeButton.type = "button";
  likeButton.className = `like-button ${memory.likes > 0 ? "active" : ""}`;
  likeButton.innerHTML = `<span>♥</span><span>${memory.likes || 0} like${memory.likes === 1 ? "" : "s"}</span>`;
  likeButton.addEventListener("click", () => {
    memory.likes += 1;
    persistMemories();
    renderGallery();
    renderLightboxSocial(memory);
    vibrate([8]);
    triggerAnimation(likeButton, "heartPop");
    showToast("Liked this buddy moment.");
  });
  lightboxSocial.appendChild(likeButton);

  const suggested = suggestEmojisForCaption(memory.caption);
  const displayEmojis = [...new Set([...suggested, ...reactionEmojis])];

  displayEmojis.forEach((emoji) => {
    const count = memory.reactions[emoji] || 0;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `reaction-button ${count > 0 ? "active" : ""}`;
    button.innerHTML = `<span>${emoji}</span><span>${count}</span>`;
    button.title = suggested.includes(emoji) ? "Suggested for this moment" : "";
    button.addEventListener("click", () => {
      memory.reactions[emoji] = (memory.reactions[emoji] || 0) + 1;
      persistMemories();
      renderGallery();
      renderLightboxSocial(memory);
      vibrate([5]);
      triggerAnimation(button, "pop");
    });
    lightboxSocial.appendChild(button);
  });
}

function renderComments(memory) {
  commentsList.innerHTML = "";

  if (!memory.comments.length) {
    const empty = document.createElement("p");
    empty.className = "comment";
    empty.textContent = "No comments yet — be the first to say something nice!";
    commentsList.appendChild(empty);
    return;
  }

  memory.comments.forEach((comment) => {
    const item = document.createElement("div");
    item.className = "comment";
    const text = document.createElement("p");
    text.className = "comment-text";
    text.textContent = comment.text;
    const time = document.createElement("span");
    time.className = "comment-time";
    time.textContent = formatDate(new Date(comment.createdAt)) + " · " + formatTime(new Date(comment.createdAt));
    item.appendChild(text);
    item.appendChild(time);
    commentsList.appendChild(item);
  });
}

function addComment(memory) {
  const text = commentInput.value.trim();
  if (!text) return;

  memory.comments.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    text,
    createdAt: new Date().toISOString()
  });

  persistMemories();
  commentInput.value = "";
  renderComments(memory);
  renderGallery();
  vibrate([5]);
  showToast("Comment posted.");
  triggerAnimation(commentsList.firstElementChild, "slideInRight");
}

function createMemoryCard(memory, index) {
  const album = getAlbum(memory.album || "squad");
  const suggested = suggestEmojisForCaption(memory.caption);
  const topReactions = suggested
    .filter((emoji) => (memory.reactions || {})[emoji])
    .slice(0, 2);

  const card = document.createElement("article");
  card.className = "memory-card";
  card.style.borderTopColor = album.color;
  card.style.animationDelay = `${index * 0.05}s`;
  card.innerHTML = `
    <img src="${memory.image}" alt="Saved buddy moment" />
    <div class="memory-actions">
      <button class="favorite-memory ${memory.favorite ? "active" : ""}" type="button" aria-label="${memory.favorite ? "Unfavorite" : "Favorite"} memory">♥</button>
      <button class="delete-memory" type="button" aria-label="Delete memory">×</button>
    </div>
    <div class="memory-info">
      <p class="memory-date">${formatDate(new Date(memory.createdAt))}</p>
      ${memory.caption ? `<p class="memory-caption"></p>` : ""}
      ${memory.location ? `<a class="memory-location" href="${memory.location.url}" target="_blank" rel="noopener noreferrer">📍 ${memory.location.name}</a>` : ""}
      ${memory.coordinates ? `<span class="memory-coords">🌐 ${memory.coordinates.lat.toFixed(3)}, ${memory.coordinates.lng.toFixed(3)}</span>` : ""}
      <div class="memory-social">
        <button class="like-button ${memory.likes > 0 ? "active" : ""}" type="button">
          <span>♥</span><span>${memory.likes || 0}</span>
        </button>
        ${topReactions.map((emoji) => `<button class="reaction-button active" type="button"><span>${emoji}</span><span>${memory.reactions[emoji]}</span></button>`).join("")}
        ${memory.comments.length ? `<span class="comment-badge">💬 ${memory.comments.length}</span>` : ""}
      </div>
    </div>
  `;

  if (memory.caption) {
    card.querySelector(".memory-caption").textContent = memory.caption;
  }

  card.querySelector("img").addEventListener("click", () => {
    openLightbox(memory);
  });

  const favoriteButton = card.querySelector(".favorite-memory");
  favoriteButton.addEventListener("click", () => {
    memory.favorite = !memory.favorite;
    persistMemories();
    renderGallery();
    vibrate([10]);
    triggerAnimation(favoriteButton, "heartPop");
    showToast(memory.favorite ? "Added to favorites." : "Removed from favorites.");
  });

  const deleteButton = card.querySelector(".delete-memory");
  deleteButton.addEventListener("click", () => {
    triggerAnimation(deleteButton, "wiggle");
    vibrate([15, 10]);
    setTimeout(() => {
      memories = memories.filter((item) => item.id !== memory.id);
      persistMemories();
      renderGallery();
      renderAlbums();
      showToast("Moment deleted.");
    }, 300);
  });

  const likeButton = card.querySelector(".like-button");
  likeButton.addEventListener("click", () => {
    memory.likes = (memory.likes || 0) + 1;
    persistMemories();
    renderGallery();
    vibrate([8]);
    triggerAnimation(likeButton, "heartPop");
    showToast("Liked!");
  });

  return card;
}

function openLightbox(memory) {
  currentLightboxMemory = memory;
  lightboxImage.src = memory.image;
  lightboxCaption.textContent = memory.caption || formatDate(new Date(memory.createdAt));
  updateLightboxMeta(memory);
  renderLightboxSocial(memory);
  renderComments(memory);
  lightbox.showModal();
  vibrate([10]);
}

function renderGallery() {
  gallery.innerHTML = "";

  const filteredMemories = memories.filter((memory) => {
    const matchesAlbum = currentAlbumFilter === "all" || (memory.album || "squad") === currentAlbumFilter;
    const matchesFavorite = !showFavoritesOnly || memory.favorite;
    return matchesAlbum && matchesFavorite && matchesSearch(memory, searchQuery);
  });

  const hasMemories = filteredMemories.length > 0;
  const activeAlbum = getAlbum(currentAlbumFilter);

  emptyState.classList.toggle("hidden", hasMemories);
  clearAllButton.classList.toggle("hidden", memories.length === 0);
  showAllButton.classList.toggle("hidden", currentAlbumFilter === "all");
  favoritesButton.classList.toggle("hidden", memories.length === 0);
  favoritesButton.textContent = showFavoritesOnly ? "♥ Showing favorites" : "♥ Favorites";
  surpriseButton.disabled = memories.length === 0;

  galleryEyebrow.textContent = currentAlbumFilter === "all" ? "Your collection" : "Album";
  galleryHeading.textContent =
    currentAlbumFilter === "all" ? "Buddy memories" : `${activeAlbum.name} moments`;

  memoryCount.textContent = `${filteredMemories.length} ${filteredMemories.length === 1 ? "moment" : "moments"}`;

  filteredMemories.forEach((memory, index) => {
    gallery.appendChild(createMemoryCard(memory, index));
  });

  renderHomeGallery();
  renderAlbums();
}

function renderHomeGallery() {
  homeGallery.innerHTML = "";
  const recent = memories.slice(0, 6);

  homeEmptyState.classList.toggle("hidden", recent.length > 0);
  viewAllMemoriesButton.classList.toggle("hidden", recent.length === 0);

  recent.forEach((memory, index) => {
    homeGallery.appendChild(createMemoryCard(memory, index));
  });
}

function navigateTo(viewName) {
  if (!["home", "create", "memories"].includes(viewName)) return;

  currentView = viewName;

  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  document.getElementById(`${viewName}View`).classList.add("active");

  bottomNavItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });

  createFab.classList.toggle("hidden", viewName === "create");

  appContent.scrollTop = 0;

  vibrate([5]);

  if (viewName === "create" && !selectedImage) {
    setTimeout(() => uploadArea.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
  }
}

function setupPullToRefresh() {
  let startY = 0;
  let pulling = false;
  const threshold = 90;

  appContent.addEventListener("touchstart", (event) => {
    if (appContent.scrollTop > 0) return;
    startY = event.touches[0].clientY;
    pulling = true;
  }, { passive: true });

  appContent.addEventListener("touchmove", (event) => {
    if (!pulling) return;
    const y = event.touches[0].clientY;
    const distance = Math.max(0, y - startY);

    if (distance > 10) {
      pullIndicator.style.transform = `translateY(${Math.min(distance, threshold)}px)`;
      pullIndicator.classList.toggle("releasing", distance >= threshold);
    }
  }, { passive: true });

  appContent.addEventListener("touchend", () => {
    if (!pulling) return;
    pulling = false;

    const transform = pullIndicator.style.transform || "";
    const distance = parseFloat(transform.replace("translateY(", "").replace("px)", "")) || 0;

    if (distance >= threshold) {
      pullIndicator.querySelector("span").textContent = "Refreshing...";
      vibrate([10, 10]);
      window.setTimeout(() => {
        renderGallery();
        pullIndicator.style.transform = "";
        pullIndicator.classList.remove("releasing");
        pullIndicator.querySelector("span").textContent = "Pull to refresh";
        showToast("Memories refreshed");
      }, 800);
    } else {
      pullIndicator.style.transform = "";
      pullIndicator.classList.remove("releasing");
    }
  }, { passive: true });
}

function setupHeaderShadow() {
  appContent.addEventListener("scroll", () => {
    appHeader.classList.toggle("scrolled", appContent.scrollTop > 8);
  }, { passive: true });
}

function getPoseScore(pose, query, activeAlbum, activeMood) {
  let score = 0;
  const q = query.toLowerCase();
  const albumId = activeAlbum?.id || "all";
  const moodId = activeMood?.id;

  pose.tags.forEach((tag) => {
    if (q.includes(tag)) score += 3;
    if (albumId !== "all" && tag === albumId) score += 2;
    if (moodId && tag === moodId) score += 2;
  });

  if (q.includes("beach") && pose.tags.includes("beach")) score += 4;
  if (q.includes("party") && pose.tags.includes("party")) score += 4;
  if (q.includes("food") && pose.tags.includes("food")) score += 4;
  if (q.includes("night") && pose.tags.includes("night")) score += 4;
  if (q.includes("mountain") && pose.tags.includes("mountain")) score += 4;
  if (q.includes("city") && pose.tags.includes("city")) score += 4;

  return score;
}

function suggestPose(query = "") {
  const search = query.trim().toLowerCase();
  lastAiQuery = search;

  let scoredPoses = poseIdeas.map((pose) => ({
    ...pose,
    score: getPoseScore(pose, search, selectedAlbum, selectedMood)
  }));

  if (search) {
    scoredPoses.sort((a, b) => b.score - a.score);
    const topScore = scoredPoses[0].score;
    const matchingPoses = scoredPoses.filter((pose) => pose.score === topScore && topScore > 0);
    if (matchingPoses.length) {
      return matchingPoses[Math.floor(Math.random() * matchingPoses.length)];
    }
  }

  return poseIdeas[Math.floor(Math.random() * poseIdeas.length)];
}

function displayPoseSuggestion(pose) {
  aiPoseEmoji.textContent = pose.emoji;
  aiPoseTitle.textContent = pose.title;
  aiPoseDescription.textContent = pose.description;

  aiPoseTags.innerHTML = pose.tags
    .slice(0, 5)
    .map((tag) => `<span class="ai-pose-tag">#${tag}</span>`)
    .join("");

  aiSuggestion.classList.remove("hidden");
  triggerAnimation(aiSuggestion, "fadeInUp");
  triggerAnimation(aiPoseEmoji, "pop");
}

function renderAiChips() {
  aiChips.innerHTML = "";
  const chipLabels = ["Beach 🏖️", "Party 🎉", "Café ☕", "Hiking 🥾", "Night out 🌃", "Squad pic 🤗", "Food 🍕", "Sunset 🌅"];

  chipLabels.forEach((label) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "ai-chip";
    chip.textContent = label;
    chip.addEventListener("click", () => {
      aiChips.querySelectorAll(".ai-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      aiSituationInput.value = label.replace(/[^\w\s]/g, "").trim();
      vibrate([5]);
      triggerAnimation(chip, "pop");
      const pose = suggestPose(aiSituationInput.value);
      displayPoseSuggestion(pose);
    });
    aiChips.appendChild(chip);
  });
}

function openAiAssistant() {
  aiSituationInput.value = "";
  aiSuggestion.classList.add("hidden");
  renderAiChips();

  const albumName = selectedAlbum ? selectedAlbum.name : "Squad";
  const moodName = selectedMood ? selectedMood.name : "fun";
  aiSituationInput.placeholder = `e.g., ${albumName.toLowerCase()} ${moodName.toLowerCase()} moment...`;

  aiDialog.showModal();
  triggerAnimation(aiDialog, "zoomIn");
}

function handleAiSuggest() {
  const query = aiSituationInput.value;
  const pose = suggestPose(query);
  displayPoseSuggestion(pose);
  vibrate([8]);

  if (query.trim()) {
    showToast("AI Buddy found a pose for you!");
  } else {
    showToast("Here's a random buddy pose idea!");
  }
}

document.getElementById("choosePhotoButton").addEventListener("click", () => {
  photoInput.removeAttribute("capture");
  photoInput.click();
});

document.getElementById("cameraButton").addEventListener("click", () => {
  photoInput.setAttribute("capture", "environment");
  photoInput.click();
});

document.getElementById("removePhotoButton").addEventListener("click", resetEditor);

photoInput.addEventListener("change", (event) => {
  readImage(event.target.files[0]);
});

captionInput.addEventListener("input", () => {
  characterCount.textContent = captionInput.value.length;
});

openMapButton.addEventListener("click", () => {
  const name = locationInput.value.trim();
  if (!name && !currentCoordinates) {
    showToast("Type a location or use locate first.");
    return;
  }
  window.open(buildMapsUrl(name, currentCoordinates), "_blank", "noopener,noreferrer");
});

useLocationButton.addEventListener("click", getCurrentLocation);

function handleDragOver(event) {
  event.preventDefault();
  uploadArea.classList.add("dragging");
}

function handleDragLeave(event) {
  if (uploadArea.contains(event.relatedTarget)) return;
  event.preventDefault();
  uploadArea.classList.remove("dragging");
}

function handleDrop(event) {
  event.preventDefault();
  uploadArea.classList.remove("dragging");
  readImage(event.dataTransfer.files[0]);
}

uploadArea.addEventListener("dragenter", handleDragOver);
uploadArea.addEventListener("dragover", handleDragOver);
uploadArea.addEventListener("dragleave", handleDragLeave);
uploadArea.addEventListener("drop", handleDrop);

saveMemoryButton.addEventListener("click", async () => {
  if (!selectedImage) {
    showToast("Choose a photo first.");
    return;
  }

  saveMemoryButton.disabled = true;
  saveMemoryButton.classList.add("saving");
  saveMemoryButton.textContent = "Saving…";

  try {
    const image = await createFilteredImage();
    const locationName = locationInput.value.trim();
    const location = locationName ? { name: locationName, url: buildMapsUrl(locationName, currentCoordinates) } : null;

    memories.unshift({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      image,
      caption: captionInput.value.trim(),
      filter: selectedFilter.id,
      album: selectedAlbum.id,
      mood: selectedMood ? selectedMood.id : null,
      favorite: false,
      likes: 0,
      reactions: {},
      comments: [],
      location,
      coordinates: currentCoordinates,
      createdAt: new Date().toISOString()
    });

    persistMemories();
    renderGallery();
    resetEditor();
    vibrate([15, 10, 15]);
    showToast("Your buddy moment was saved.");
    confettiBurst();
    navigateTo("home");
  } catch {
    showToast("Something went wrong while saving the photo.");
  } finally {
    saveMemoryButton.disabled = false;
    saveMemoryButton.classList.remove("saving");
    saveMemoryButton.innerHTML = "Save this moment <span>↗</span>";
  }
});

clearAllButton.addEventListener("click", () => {
  if (!window.confirm("Delete all saved buddy moments?")) return;
  memories = [];
  persistMemories();
  renderGallery();
  vibrate([20, 10, 20]);
  showToast("All buddy moments cleared.");
});

showAllButton.addEventListener("click", () => {
  currentAlbumFilter = "all";
  renderGallery();
});

viewAllMemoriesButton.addEventListener("click", () => navigateTo("memories"));

favoritesButton.addEventListener("click", () => {
  showFavoritesOnly = !showFavoritesOnly;
  renderGallery();
});

surpriseButton.addEventListener("click", () => {
  const pool = memories.filter((memory) => {
    const matchesAlbum = currentAlbumFilter === "all" || (memory.album || "squad") === currentAlbumFilter;
    const matchesFavorite = !showFavoritesOnly || memory.favorite;
    return matchesAlbum && matchesFavorite && matchesSearch(memory, searchQuery);
  });

  if (pool.length === 0) {
    showToast("No moments match your current filters.");
    return;
  }

  const randomMemory = pool[Math.floor(Math.random() * pool.length)];
  openLightbox(randomMemory);
});

searchInput.addEventListener("input", (event) => {
  searchQuery = event.target.value.trim();
  renderGallery();
});

addCommentButton.addEventListener("click", () => {
  if (currentLightboxMemory) addComment(currentLightboxMemory);
});

commentInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && currentLightboxMemory) {
    event.preventDefault();
    addComment(currentLightboxMemory);
  }
});

lightboxDownload.addEventListener("click", () => {
  if (!currentLightboxMemory) return;
  const link = document.createElement("a");
  link.href = currentLightboxMemory.image;
  link.download = `buddies-moment-${currentLightboxMemory.id.slice(0, 8)}.jpg`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  vibrate([8]);
  showToast("Moment downloaded.");
});

aiAssistantButton.addEventListener("click", () => {
  openAiAssistant();
  vibrate([8]);
  triggerAnimation(aiAssistantButton, "pop");
});

aiClose.addEventListener("click", () => aiDialog.close());

aiDialog.addEventListener("click", (event) => {
  if (event.target === aiDialog) aiDialog.close();
});

aiSuggestButton.addEventListener("click", handleAiSuggest);

aiSituationInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleAiSuggest();
  }
});

aiTryAgainButton.addEventListener("click", () => {
  const pose = suggestPose(lastAiQuery);
  displayPoseSuggestion(pose);
  vibrate([5]);
  triggerAnimation(aiTryAgainButton, "pop");
});

bottomNavItems.forEach((item) => {
  item.addEventListener("click", () => navigateTo(item.dataset.view));
});

createFab.addEventListener("click", () => navigateTo("create"));

function updateThemeIcon() {
  themeButton.textContent = document.documentElement.dataset.theme === "dark" ? "☾" : "☼";
}

themeButton.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = dark ? "light" : "dark";
  localStorage.setItem(THEME_KEY, dark ? "light" : "dark");
  updateThemeIcon();
  vibrate([8]);
  triggerAnimation(themeButton, "pop");
});

document.getElementById("lightboxClose").addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.open) {
    lightbox.close();
  }
  if (event.key === "Escape" && aiDialog.open) {
    aiDialog.close();
  }
  if ((event.key === "/" || event.key === "s") && document.activeElement?.tagName !== "TEXTAREA" && currentView === "memories") {
    event.preventDefault();
    searchInput.focus();
  }
});

function confettiBurst() {
  const context = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#ff6b6b", "#8b5cf6", "#ffd166", "#06d6a0", "#ffffff"];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2 + 120,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 1.2) * 15,
      size: Math.random() * 8 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      gravity: 0.35,
      drag: 0.96
    });
  }

  let frame = 0;

  function draw() {
    context.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let active = false;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.rotation += p.rotationSpeed;

      if (p.y < confettiCanvas.height + 20) {
        active = true;
        context.save();
        context.translate(p.x, p.y);
        context.rotate(p.rotation);
        context.fillStyle = p.color;
        context.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        context.restore();
      }
    });

    if (active && frame < 180) {
      frame++;
      requestAnimationFrame(draw);
    } else {
      context.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  draw();
}

window.addEventListener("resize", () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === "dark") {
  document.documentElement.dataset.theme = "dark";
}
updateThemeIcon();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

setupPullToRefresh();
setupHeaderShadow();
renderGallery();
