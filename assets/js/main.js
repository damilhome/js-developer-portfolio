document.addEventListener('DOMContentLoaded', async () => {
    const profileData = await fetchProfileData()
    console.log(profileData);
})