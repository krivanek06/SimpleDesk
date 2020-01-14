package rc.bootsecurity.model.enums;

public enum USER_TYPE {
    Admin("Admin"),
    Ghost("Ghost");

    private final String text;


    USER_TYPE(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
