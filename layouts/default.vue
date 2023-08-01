<template>
    <div>
        <header>
            <nav>
                <span class="logo">Andrej Hamráček</span>
                <div class="nav-actions">
                    <button>
                        <Icon name="material-symbols:globe-uk" size="1.5rem"/>
                    </button>
                    <button>
                        <Icon name="material-symbols:sunny-outline-rounded" size="1.5rem"/>
                    </button>
                </div>
            </nav>
        </header>

        <main>
            <slot/>
        </main>
    </div>
</template>

<style scoped>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6rem;
    }

    .logo {
        white-space: nowrap;
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .nav-actions {
        display: flex;
        gap: 1.5rem;
    }
</style>