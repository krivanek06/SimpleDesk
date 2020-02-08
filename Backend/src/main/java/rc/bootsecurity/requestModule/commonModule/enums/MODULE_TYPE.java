package rc.bootsecurity.requestModule.commonModule.enums;

public enum MODULE_TYPE {
    Ticket("Ticket"),
    Report("Report"),
    Finance("Finance"),
    Privilege("Privilege");

    private final String text;


    MODULE_TYPE(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
