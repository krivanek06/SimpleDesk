package rc.bootsecurity.userModule.enums;

public enum USER_TYPE {
    Admin("admin"),
    Ghost("ghost");

    private final String text;


    USER_TYPE(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
