<template>
    <header>
        <div class="container__fluid">
            <AppLogo />

            <AppHeaderNavigation />

            <AppThemeSwitcher />
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
        background-color: var(--primary_color);
        .container__fluid{
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>