package rc.bootsecurity.model.enums;

public enum REQUEST_POSITION {
    Vytvorené("Vytvorené"),
    Pridelené("Pridelené"),
    Zatvorené("Zatvorené");

    private final String text;


    REQUEST_POSITION(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
