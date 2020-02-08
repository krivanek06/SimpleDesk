package rc.bootsecurity.requestModule.commonModule.enums;

public enum REQUEST_PRIORITY {
    SMALL("nízka"),
    MEDIUM("stredná"),
    LARGE("vysoká");

    private final String text;


    REQUEST_PRIORITY(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
